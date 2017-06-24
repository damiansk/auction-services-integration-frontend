import {Component, DoCheck} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements DoCheck {

  ngDoCheck(): void {
    window['componentHandler'] ? window['componentHandler'].upgradeDom() : null;
  }

}
