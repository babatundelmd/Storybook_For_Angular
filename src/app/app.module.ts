import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PhotoUiCardComponent } from './photo-ui-card/photo-ui-card.component';

@NgModule({
  declarations: [
    AppComponent,
    PhotoUiCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
