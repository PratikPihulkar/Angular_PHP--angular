import { Component } from '@angular/core';

@Component({
  selector: 'app-bill-view',
  templateUrl: './bill-view.component.html',
  styleUrl: './bill-view.component.css'
})
export class BillViewComponent {

    otp: any;

    toggleVar=false
    btnConfir=true

    checkOtp(){
        // if(this.otp==this.otp)
        if(this.toggleVar)
        {
          this.toggleVar=false;
          this.btnConfir=false
        }
        else{
          this.toggleVar=true;
        }
        console.log(this.toggleVar)
        
    }

    confirmPayment(){
     console.log("Payment Done")
     console.log("Order Placed")
    }
}
