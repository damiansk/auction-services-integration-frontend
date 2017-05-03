import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'done',
  templateUrl: 'sign-up-done.component.html',
  styleUrls: ['../sign-up.component.scss']
})
export class SignUpDoneComponent {

  constructor(private router: Router,
              private route: ActivatedRoute) {}

  goToLogin(): void {
    this.router.navigate(['login'], {relativeTo: this.route.parent});
  }

}
