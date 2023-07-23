import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardModule } from './card/card.module';
import { SetModule } from './set/set.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CardModule,
    SetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
