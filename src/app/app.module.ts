import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { NavComponent } from './main/nav/nav.component';
import { LeftnavComponent } from './main/leftnav/leftnav.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavComponent,
    LeftnavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
