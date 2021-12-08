import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
class CardComponent implements OnInit {
  title = 'My Card';
  textColor = 'black';
  text =
    'Aute ut consectetur nisi pariatur. Et ut amet enim tempor sunt quis Lorem cupidatat laboris eu laboris incididunt minim. Ad nisi minim duis proident reprehenderit incididunt cupidatat eu.Anim quis in eu consectetur magna tempor nostrud et sint. Aliquip aliqua deserunt non Lorem aliqua do ipsum pariatur dolor nisi tempor adipisicing. In ad enim laboris sint esse eu nisi id sint. Est laboris adipisicing exercitation nisi cupidatat proident fugiat ipsum amet mollit tempor ipsum anim duis. Duis ullamco proident pariatur occaecat ad id amet minim velit culpa esse dolore cupidatat. Irure incididunt eiusmod aute sit ullamco ex. Non labore et adipisicing do enim cupidatat proident incididunt irure adipisicing eiusmod.';
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
    this.title = 'title has been change';
  }
}
export { CardComponent };
