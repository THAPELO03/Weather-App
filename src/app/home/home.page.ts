import { Component } from '@angular/core';
import { WeatherserviceService } from '../weatherservice.service';
import { templateJitUrl } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  city: string="";
  temp;
  min;
  max;
  info
  cities=[];

  constructor(public weatherService:WeatherserviceService) {}

   Location(){ this.weatherService.getWeather(this.city).subscribe((data) =>{
      this.info = data;
      console.log(this.info);

      this.temp = Math.round(this.info.main.temp -273.25);
      this.min = Math.round(this.info.temp_min -273.25);
      this.max = Math.round(this.info.temp_max -273.25);
    })
  }
  
}
