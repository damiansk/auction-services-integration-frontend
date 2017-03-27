import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Router} from "@angular/router";

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
    private formBuilder: FormBuilder,
    private router: Router
  ){}

  doSignIn(event): void {
    console.log(event);
    console.log(this.signInForm.value);
  }

  goToRegister(): void {
    this.router.navigate(['/register']);
  }

}
