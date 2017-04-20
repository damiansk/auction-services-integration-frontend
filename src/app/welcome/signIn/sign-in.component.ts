import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Login } from './sing-in.interface';
import { SignInService } from './sign-in.service';

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
              private signInService: SignInService) {}

  ngOnInit(): void {
    this.modelForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit({value, valid}: {value: Login, valid: boolean}): void {
    if ( valid === true ) {
      this.signInService.loginUser(value)
        .subscribe(
          (data) => {
            if ( data.status === 200 ) {
              this.saveTokenToCookie( data.headers.get('Authorization') );
              this.router.navigateByUrl('/home');
            } else {
              console.log('Wrong response status');
            }
          },
          (error) => {
            console.error(error._body);
            this.modelForm.reset();
          },
          () => this.modelForm.reset()
        );
    }
  }

  saveTokenToCookie(token: string): void {
    document.cookie = `Authorization = ${token}; path=/`;
  }

  goToRegister(): void {
    this.router.navigate(['../register'], {relativeTo: this.route});
  }

}
