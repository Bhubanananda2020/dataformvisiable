import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormdataModule } from './formdata/formdata.module';
import { TextMaskModule } from 'angular2-text-mask';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TextMaskModule,
    AppRoutingModule,
    FormdataModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
