import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent },
  { path: 'forget', component: ForgetPasswordComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      // {
      //   path: 'apply', component: ApplyComponent,
      // },
      // {
      //   path: 'confirm-mortgage', component: ConfirmMortgageComponent,
      // },
      // { path: 'mortgage-options', component: MortgageOptionsComponent },
      // { path: 'other-occupants', component: OtherOccupantsComponent },
      // { path: 'payment-details', component: PaymentDetailsComponent },
      // { path: 'property-details', component: PropertyDetailsComponent },
      // { path: 'review-submit', component: ReviewSubmitComponent },
      // { path: 'valuation', component: ValuationComponent },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
