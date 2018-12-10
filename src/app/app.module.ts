import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { NavComponent } from './main/nav/nav.component';
import { LeftnavComponent } from './main/leftnav/leftnav.component';
import { FormComponent } from './main/form/form.component';
import { Services } from './services/app.services';
import { WeatherComponent } from './main/leftnav/weather/weather.component';




@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavComponent,
    LeftnavComponent,
    FormComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    Services
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
