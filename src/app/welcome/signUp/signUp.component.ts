import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {CustomValidators} from '../validators/validators';

@Component({
  selector: 'app-sign-up',
  templateUrl: './signUp.component.html'
})
export class SignUpComponent implements OnInit {

  private modelForm: FormGroup;
  private formErrors = {
    email: '',
    password: '',
    confirmPassword: ''
  };
  private validationMessages = {
    required: 'To pole jest wymagane',
    emailValid: 'Podany e-mail jest nie prawidlowy',
    passwordValid: 'Haslo musi skladac sie z co najmniej 5 liter i 1 cyfry',
    mismatchedPasswords: 'Hasla nie sa identyczne'
  };

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

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
        confirmPassword: ['', Validators.required]
      },
      {validator: CustomValidators.matchingPasswords('password', 'confirmPassword')});

    this.modelForm.valueChanges.subscribe(() => {
      this.onControlValueChanged();
    });

    this.onControlValueChanged();
  }

  onSubmit(modelForm: FormGroup): void {
    console.log(modelForm);
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
    this.router.navigate(['/login']);
  }

}
