import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AlertModule } from 'ngx-bootstrap';
import {TranslatorModule} from "../translator/translator.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    TranslatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
