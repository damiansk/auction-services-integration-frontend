import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'allegro-auth',
  templateUrl: './allegro-auth.component.html'
})
export class AllegroAuthComponent implements OnInit {

  private expirationTime: string;

  constructor() {}

  ngOnInit(): void {
    this.getAccountExpirationTime();
  }

  getActivationLink(): void {

  }

  getAccountExpirationTime(): void {

  }

}
