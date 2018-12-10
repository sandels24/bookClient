import { Component, OnInit } from '@angular/core';
import {Services} from '../../../services/app.services'
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  temp;
  day;
  weatherdata;
  sky_cover
  constructor(private service : Services) { }

  ngOnInit() {
    this.service.getWeather().subscribe(data => {
      console.log(data.observation.imperial.temp);
      this.weatherdata = data;
      this.day = data.observation.dow;
      this.temp = data.observation.imperial.temp;
      this.sky_cover = data.observation.sky_cover;
    });
  }

}
