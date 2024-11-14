import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { SuccessPageComponent } from './success-page/success-page.component';
import { ProfileComponent } from './profile/profile.component';
import { PlansViewComponent } from './plans-view/plans-view.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'home',
    component:HomePageComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'profile',
    component:ProfileComponent
  },
  {
    path:'plan_view',
    component:PlansViewComponent
  },
  {
    path:'payment',
    component:PaymentComponent
  },
  {
    path:'success_page',
    component:SuccessPageComponent
  },
  
 


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
