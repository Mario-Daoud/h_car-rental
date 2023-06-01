import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderfooterModule } from './headerfooter/headerfooter.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderfooterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
