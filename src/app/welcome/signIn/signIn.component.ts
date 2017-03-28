import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-in',
  templateUrl: './signIn.component.html'
})
export class SignInComponent implements OnInit {

  private modelForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.modelForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  doSignIn(event): void {
    console.log(event);
    console.log(this.modelForm.value);
  }

  goToRegister(): void {
    this.router.navigate(['/register']);
  }

}
