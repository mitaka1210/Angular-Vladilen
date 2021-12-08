//Angular Components
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
//MY Components
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [AppComponent, FormComponent, CardComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
