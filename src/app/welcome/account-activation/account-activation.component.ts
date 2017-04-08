import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Http } from '@angular/http';


@Component({
  selector: 'account-activation',
  template: '<h2>Account activation component</h2><p>{{token}}</p><p #waiting>Prosze czekać, trwa aktywowanie...</p>'
})
export class AccountActivationComponent implements OnInit {

  private token: string;

  constructor(private http: Http,
              private router: Router,
              private route: ActivatedRoute){}

  ngOnInit(): void {
    this.token = this.route.snapshot.queryParams['token'] || '';

    //TODO Added activating request to server and handling response
  }

}
