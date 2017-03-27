import { Component } from '@angular/core';
import {ControlContainer, FormBuilder, FormControl, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-up',
  templateUrl: './signUp.component.html'
})
export class SignUpComponent {


  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  doSignUp(): void {

  }

  goToLogin(): void {
    this.router.navigate(['/login']);
  }

}
