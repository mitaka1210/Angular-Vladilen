import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  toggle = true;
  title = 'vladilen-minin-project';

  toggleCards() {
    this.toggle = !this.toggle;
  }
}
