import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Login } from './sing-in.interface';
import { SignInService } from './sign-in.service';

import { CookieService } from 'ng2-cookies';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sing-in.component.css']
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
              private cookieService: CookieService) {}

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
    this.cookieService.set('authorization', headers.get('authorization'), null, '/');
    this.cookieService.set('email', body['email'], null, '/');
    this.cookieService.set('role', body['role'], null, '/');

    this.router.navigateByUrl('/home');
  }

  goToRegister(): void {
    this.router.navigate(['../register'], {relativeTo: this.route});
  }

}
