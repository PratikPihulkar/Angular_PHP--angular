import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { response } from 'express';
import { error } from 'console';
import { DataStoreServiceService } from '../Services/data-store-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent  implements OnInit{

  loginForm!: FormGroup;
  registerForm!:FormGroup
  id:any
  loginVar: any=true;
  userList:any
  singleUser:any

  constructor(  private fb: FormBuilder, private dataStore: DataStoreServiceService, private router:Router) {}

  ngOnInit(): void {
    
    this.loginForm = this.fb.group({
      email: ['', Validators.required ,] ,//^[a-zA-Z]+(\s[a-zA-Z]+)?$    Validators.pattern('^[a-zA-Z]+$')
      password: ['', [Validators.required, Validators.maxLength(20)]]
    });


    this.registerForm = this.fb.group({
      name: ['', [Validators.required] ] ,
      email: ['', [Validators.required] ] ,//^[a-zA-Z]+(\s[a-zA-Z]+)?$    Validators.pattern('^[a-zA-Z]+$')
      mobile: ['', [Validators.required]],
      password: ['', [Validators.required]],
      password_confirmation: ['', [Validators.required]],
      // orderList: [[]],
      // cartList: [[]],
    },
    {
      validators: this.passwordMatchValidator
    });
    
    
  }

  emailValue:any
  passwordValue:any
  nameValue:any

  goBack() {
    window.history.back();
  }

tryLogin() {
  
   


      this.dataStore.getSingleUser(this.loginForm.value.email).subscribe(
        (res) => {
          this.singleUser = res;
          
        })
          

       
  
}

passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
  const password = control.get('password');
  const password_confirmation = control.get('password_confirmation');
  
  if (password && password_confirmation &&  password.value !== password_confirmation.value) {
    console.log("Password MAtched")
    return { passwordMismatch: true };
    
  }
  return null;
}
       
op:any

tryRegister(){
  console.log(this.registerForm.value)
    this.dataStore.createUser(this.registerForm.value).subscribe((res)=>{
    
      this.op=res
      this.id=this.op.email
      alert(this.id+"  this is your ID Note down for Login ")
      this.router.navigate(['/login']);
    
    })

}

toggleLoginVar(){
if(this.loginVar){
  this.loginVar=false
}
else{
  this.loginVar=true
}
}




tvar:any

getSingleUser(){
  this.tvar= this.tvar=this.dataStore.getSingleUser({"email":"pratikpihulkar2000@gmail.com"})
  console.log( this.tvar)
}

}
