import {Component, DoCheck, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit, DoCheck {

  constructor(private router: Router,
              private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.isLogged() ? this.router.navigate(['home']) : null;
  }

  ngDoCheck(): void {
    window['componentHandler'] ? window['componentHandler'].upgradeDom() : null;
  }

}
