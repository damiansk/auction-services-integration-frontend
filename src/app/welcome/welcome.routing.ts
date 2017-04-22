import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent } from './welcome.component';
import { SignInComponent } from './signIn/sign-in.component';
import { SignUpComponent } from './signUp/sign-up.component';
import { SignUpDoneComponent } from './signUp/signUpComplete/sign-up-done.component';
import { AccountActivationComponent } from './account-activation/account-activation.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: SignInComponent },
      { path: 'register', component: SignUpComponent },
      { path: 'register/done', component: SignUpDoneComponent },
      { path: 'account-activation', component: AccountActivationComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule {}
