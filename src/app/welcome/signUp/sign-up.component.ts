import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { CustomValidators } from '../validators/validators';
import { SignUpService } from './sign-up.service';
import { User } from './sign-up.interface';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  private modelForm: FormGroup;
  private formErrors = {
    email: '',
    password: '',
    matchingPassword: ''
  };
  private validationMessages = {
    required: 'To pole jest wymagane',
    emailValid: 'Podany e-mail jest nie prawidlowy',
    passwordValid: 'Haslo musi skladac sie z co najmniej 5 liter i 1 cyfry',
    mismatchedPasswords: 'Hasla nie sa identyczne'
  };

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private signUpService: SignUpService) {}

  ngOnInit(): void {
    this.modelForm = this.formBuilder.group({
        email: ['', [
          Validators.required,
          CustomValidators.emailValid
        ]],
        password: ['', [
          Validators.required,
          CustomValidators.passwordValid
        ]],
        matchingPassword: ['', Validators.required]
      },
      {validator: CustomValidators.matchingPasswords('password', 'matchingPassword')});

    this.modelForm.valueChanges.subscribe(() => {
      this.onControlValueChanged();
    });

    this.onControlValueChanged();
  }

  onSubmit({value, valid}: {value: User, valid: boolean}): void {
    if ( valid === true ) {
      this.signUpService
        .registerUser(value)
        .subscribe(
          (data) => this.router.navigate(['done'], {relativeTo: this.route}),
          (error) => {
            console.error(error);
            this.modelForm.reset();
          },
          () => this.modelForm.reset()
        );
    }
  }

  onControlValueChanged(): void {
    const form = this.modelForm;

    for (let field in this.formErrors) {
      this.formErrors[field] = '';
      let control = form.get(field);

      if (control && control.dirty && !control.valid) {

        for (const key in control.errors) {
          if (this.validationMessages[key]) {
            this.formErrors[field] = this.validationMessages[key];
            break;
          }
        }

      }
    }

  }

  goToLogin(): void {
    this.router.navigate(['../login'], {relativeTo: this.route});
  }

}
