import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'done',
  template: `
    <h2>Twoja rejestracja przebiega pomyslnie!</h2>
    <p>Nacisnij ponizszy przycisk aby przejsc do strony logowania.</p>
    <button type="button" (click)="goToLogin()">Dalej</button>
  `
})
export class SignUpDoneComponent {

  constructor(private router: Router) {}

  goToLogin(): void {
    this.router.navigate(['/login']);
  }

}
