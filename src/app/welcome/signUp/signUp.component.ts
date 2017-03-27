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
    email: {
      required: 'To pole jest wymagane'
    },
    password: {
      required: 'To pole jest wymagane',
      minlength: 'Haslo musi sie skladac z co najmniej 6 znakow'
    },
    confirmPassword: {
      required: 'To pole jest wymagane',

    },
    mismatchedPasswords: 'Hasla nie sa identyczne'
  };

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.modelForm = this.formBuilder.group({
        email: ['', Validators.required],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required]
      },
      {validator: CustomValidators.matchingPasswords('password', 'confirmPassword')});

    this.modelForm.valueChanges.subscribe( () => {
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
        const validationMessages = this.validationMessages[field];

        for (const key in control.errors) {
          this.formErrors[field] += `${validationMessages[key]} `;
        }
      }
    }
  }

  goToLogin(): void {
    this.router.navigate(['/login']);
  }

}
