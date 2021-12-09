import { Component } from '@angular/core';

export interface Card {
  title: string;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  toggle = true;

  cards: Card[] = [
    { title: 'Card 1', text: 'TMYyyyy 1' },
    { title: 'this is card 2', text: 'asdasdasd 2' },
    { title: 'Last card!', text: 'This werqwewqe umber 3' },
  ];

  toggleCards() {
    this.toggle = !this.toggle;
  }
}
