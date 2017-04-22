import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {


  constructor(private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    const cookies = document.cookie.split(/; |=/);
    const tokenNameIndex = cookies.indexOf('Authorization');

    if ( tokenNameIndex === -1 ) {
      this.router.navigate([''], {relativeTo: this.route});
    } else {
      //TODO connect to server and check authorization token
    }
  }

}
