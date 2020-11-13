import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgrxTranslateModule } from 'ngrx-translate';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgrxTranslateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
