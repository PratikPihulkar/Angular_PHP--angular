import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {
  paymentForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.paymentForm = this.fb.group({
      paymentAmount: [{ value: 500.00, disabled: true }],
      nameOnCard: ['', [Validators.required, Validators.maxLength(255)]],
      cardNumber: ['', [Validators.required, Validators.pattern('^[0-9]{16}$')]],
      expiryDate: ['', [Validators.required, Validators.pattern('(0[1-9]|1[0-2])\/[0-9]{2}')]],
      securityCode: ['', [Validators.required, Validators.pattern('^[0-9]{3,4}$')]],
      zipCode: ['', [Validators.required, Validators.maxLength(10)]]
    });
  }

  get f() {
    return this.paymentForm.controls;
  }

  onSubmit() {
    if (this.paymentForm.valid) {
      console.log('Payment successful:', this.paymentForm.getRawValue());
      // Handle payment processing here
    } else {
      console.log('Form is invalid');
    }
  }
  pay(){
    console.log(this.paymentForm.value)
  }
}
