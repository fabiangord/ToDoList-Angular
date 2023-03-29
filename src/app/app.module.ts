import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { CardNoCompleteComponent } from './components/card-no-complete/card-no-complete.component';
import { CardCompleteComponent } from './components/card-complete/card-complete.component';
import { CardCancelComponent } from './components/card-cancel/card-cancel.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    CardNoCompleteComponent,
    CardCompleteComponent,
    CardCancelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
