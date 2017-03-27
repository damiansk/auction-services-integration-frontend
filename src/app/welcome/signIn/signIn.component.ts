import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './signIn.component.html'
})
export class SignInComponent {

  private signInForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(
    private formBuilder: FormBuilder
  ){}

  doSignIn(event): void {
    console.log(event);
    console.log(this.signInForm.value);
  }

}
