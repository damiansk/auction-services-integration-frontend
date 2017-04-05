import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from './sing-in.interface';
import { SignInService } from './sign-in.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html'
})
export class SignInComponent implements OnInit {

  private modelForm: FormGroup;
  private validationMessages = {
    required: 'To pole jest wymagane'
  };

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private signInService: SignInService
  ) {}

  ngOnInit(): void {
    this.modelForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  doSignIn({value, valid}: {value: Login, valid: boolean}): void {
    if ( valid === true ) {
      //TODO send value to SignIn service
    }
  }

  goToRegister(): void {
    this.router.navigate(['/register']);
  }

}
