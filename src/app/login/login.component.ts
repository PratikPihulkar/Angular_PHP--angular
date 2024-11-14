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
      emailId: ['', Validators.required ,] ,//^[a-zA-Z]+(\s[a-zA-Z]+)?$    Validators.pattern('^[a-zA-Z]+$')
      password: ['', [Validators.required, Validators.maxLength(20)]]
    });


    this.registerForm = this.fb.group({
      fullName: ['', [Validators.required] ] ,
      emailId: ['', [Validators.required] ] ,//^[a-zA-Z]+(\s[a-zA-Z]+)?$    Validators.pattern('^[a-zA-Z]+$')
      mobile: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
      orderList: [[]],
      cartList: [[]],
    },
    {
      validators: this.passwordMatchValidator
    });
    
    this.dataStore.getUserList().subscribe((res)=>{
      this.userList=res
    })
  }

  emailValue:any
  passwordValue:any
  fullNameValue:any

  goBack() {
    window.history.back();
  }

tryLogin() {
  try {
    if (this.loginForm.value.emailId === 'admin' && this.loginForm.value.password === 'admin') {
      this.router.navigate(['adminPage/']);
    } else {
      this.dataStore.getSingleUser(this.loginForm.value.emailId).subscribe(
        (res) => {
          this.singleUser = res;
          console.log(this.singleUser.password, "..........");

          try {
            if (this.singleUser.password === this.loginForm.value.password) {
              console.log("Password Matched", this.singleUser);
              alert("Welcome " + this.singleUser.fullName);
              
              this.dataStore.loginVar=true
              this.dataStore.globleId=this.singleUser.id

              this.dataStore.globleId = this.singleUser.id;
              this.dataStore.loginVar = true;
              this.router.navigate(['product/' + this.singleUser.id]);
            } else {
              throw new Error("ID or Password Mismatched");
            }
          } catch (error) {
            if (error instanceof Error) {
              alert(error.message);
            } 
            else 
            {
              alert("An unexpected error occurred.");
            }

          }
        },
        (error) => {
          if (error instanceof Error) {
            alert("Error fetching user data: " + error.message);
          } else {
            alert("An unexpected error occurred while fetching user data.");
          }
        }
      );
    }
  } catch (error) {
    if (error instanceof Error) {
      alert("An unexpected error occurred: " + error.message);
    } else {
      alert("An unexpected error occurred.");
    }
  }
}

passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');
  
  if (password && confirmPassword &&  password.value !== confirmPassword.value) {
    console.log("Password MAtched")
    return { passwordMismatch: true };
    
  }
  return null;
}
       
op:any

tryRegister(){
    this.dataStore.createUser(this.registerForm.value).subscribe((res)=>{
      this.op=res
      this.id=this.op.id
      alert(this.id+"  this is your ID Note down for Login ")
      // this.router.navigate(['/login']);
      window.location.reload();
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


}
