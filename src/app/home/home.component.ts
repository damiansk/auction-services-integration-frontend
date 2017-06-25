import {Component, DoCheck, ViewEncapsulation} from '@angular/core';
import {NavigationEnd, Router, RoutesRecognized} from '@angular/router';
import { AuthService } from '../_services/auth.service';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  private mail: string;

  constructor(private authService: AuthService,
              private router: Router) {
    this.mail = authService.getEmail();

    this.router.events.subscribe(event => {
      if (event instanceof RoutesRecognized) {
        console.log('navigated to:', event.url);
      }
      else if (event instanceof NavigationEnd) {
        // if u dont need the state, you could even use this event-type..
      }
    });
  }

  logOut(): void {
    // console.log('logout');
    // this.authService.logOut();
    // this.router.navigateByUrl('/');
    const nodes: any = Array.from(document.getElementsByClassName('mdl-navigation__link'));

    nodes
      .filter( node => {
        node.classList.remove('active-page');
        return this.isContainCurrentUrl(node);
      })
      .forEach( node => node.classList.add('active-page') );
  }

  isContainCurrentUrl(node): boolean {
    return node.href ? node.href.indexOf(this.router.url) != -1 : false;
  }

}
