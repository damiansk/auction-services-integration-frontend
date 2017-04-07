import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent, SignInComponent, SignUpComponent, SignUpDoneComponent } from './welcome';
import { SignUpService, SignInService } from './welcome';
import { HomeComponent } from './home';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SignInComponent,
    SignUpComponent,
    SignUpDoneComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/welcome/login', pathMatch: 'full' },
      { path: 'welcome', component: WelcomeComponent,
        children: [
          { path: '', redirectTo: 'login', pathMatch: 'full'},
          { path: 'login', component: SignInComponent },
          { path: 'register', component: SignUpComponent },
          { path: 'register/done', component: SignUpDoneComponent }
        ]
      },
      {
        path: 'home',
        component: HomeComponent
      }
    ])
  ],
  providers: [
    SignUpService,
    SignInService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
