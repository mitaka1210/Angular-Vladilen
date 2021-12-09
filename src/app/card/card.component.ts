import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../app.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
class CardComponent implements OnInit {
  @Input() card!: Card;
  title = 'My Card';
  textColor = 'black';
  text: string = 'My text';
  imgUrl =
    'https://images.unsplash.com/photo-1422207134147-65fb81f59e38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=364&q=80';
  ngOnInit(): void {
    setTimeout(() => {
      this.imgUrl =
        'https://images.unsplash.com/photo-1551582045-6ec9c11d8697?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=365&q=80';
    }, 3000);
  }
  getInfo() {
    return 'This is my Info';
  }
  changeHandler() {
    console.log(this.title);
  }
  inputHandler(value: any) {
    this.title = value;
  }

  changeTitle() {
    this.card.title = 'title has been change';
  }
}
export { CardComponent };
