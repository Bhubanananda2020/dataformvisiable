import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormdataRoutingModule } from './formdata-routing.module';
import { FormpageComponent } from './formpage/formpage.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TextMaskModule } from 'angular2-text-mask';


@NgModule({
  declarations: [
    FormpageComponent
  ],
  imports: [
    CommonModule,
    TextMaskModule,
    FormdataRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class FormdataModule { }
