import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent, SignInComponent, SignUpComponent } from './welcome';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        component: SignInComponent
      },
      {
        path: 'register',
        component: SignUpComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
