import {Component, DoCheck} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements DoCheck {

  private mail: string;

  constructor(private authService: AuthService,
              private router: Router) {
    this.mail = authService.getEmail();
  }

  logOut(): void {
    console.log('logout');
    this.authService.logOut();
    this.router.navigateByUrl('/');
  }

  ngDoCheck(): void {
    window['componentHandler'].upgradeDom();
  }

}
