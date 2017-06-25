import {Component, DoCheck, OnChanges, ViewEncapsulation} from '@angular/core';
import {NavigationEnd, Router, RoutesRecognized} from '@angular/router';
import { AuthService } from '../_services/auth.service';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnChanges {

  private mail: string;

  constructor(private authService: AuthService,
              private router: Router) {
    this.mail = authService.getEmail();
  }

  ngOnChanges(): void {
    console.log('changed');
  }

  logOut(): void {
    // console.log('logout');
    // this.authService.logOut();
    // this.router.navigateByUrl('/');
  }

  updateNavigationPanel1(): void {
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

  updateNavigationPanel(event): void {
    console.log(event);
    const node = event.target;

    !node.classList.contains('active-page') ? node.classList.add('active-page') : false;
    // this.updateNavigationPanel();
  }

}
