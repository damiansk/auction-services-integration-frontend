import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'services-connections',
  templateUrl: './services-connections.component.html'
})
export class ServicesConnectionsComponent implements OnInit {

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route
      .params
      .subscribe( params => params['service'] && params['options'] && console.log( params ) );
  }

}
