import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { DataStoreServiceService } from '../Services/data-store-service.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {
  // addDetials!: FormGroup;

  constructor(  private fb: FormBuilder, private dataStoreService: DataStoreServiceService) {}


  ngOnInit(): void {
    // this.addDetials = this.fb.group({
    //   name: ['', Validators.required ] ,
    //   paymentMethod: ['', Validators.required ,] ,//^[a-zA-Z]+(\s[a-zA-Z]+)?$    Validators.pattern('^[a-zA-Z]+$')
    //   articalDate: ['', [Validators.required, this.validDateRange()]],
    //   description: ['', [Validators.required, Validators.maxLength(500)]],
    //   image:['', Validators.required,  ],
    //   rate: ['', [Validators.required, Validators.min(1), Validators.max(5)]],
    //   comment:['']
    // });
  }
   selectedPlanOption: string = 'Monthly'; 
   selectPlanOption(option: string) 
   { 
    this.selectedPlanOption = option;

   }

   selectedOption: string = 'Card'; 
   selectOption(option: string) 
   { 
    this.selectedOption = option; 
    console.log(this.selectedOption)
   }

  
}
