import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Login } from './sing-in.interface';
import { SignInService } from './sign-in.service';

import { AuthService } from '../../_services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  private modelForm: FormGroup;
  private validationMessages = {
    required: 'To pole jest wymagane'
  };

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private signInService: SignInService,
              private authService: AuthService) {}

  ngOnInit(): void {
    this.modelForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit({value, valid}: {value: Login, valid: boolean}): void {
    if ( valid === true ) {
      this.signInService
        .loginUser(value)
        .subscribe(
          (response) => this.loginSuccess(response.headers, response.json()),
          (error) => console.error(error._body) && this.modelForm,
          () => this.modelForm.reset()
        );
    }
  }

  loginSuccess(headers, body): void {
    this.authService.setAuthToken( headers.get('authorization') );
    this.authService.setEmail( body['email'] );
    this.authService.setRole( body['role'] );

    this.router.navigateByUrl('/home');
  }

  goToRegister(): void {
    this.router.navigate(['../register'], {relativeTo: this.route});
  }

}
