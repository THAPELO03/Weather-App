import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WeatherserviceService {
  city= "";
  AppID= "&APPID=6f13124d8ea8a9a97c98ed495d31cbc7"
  cities=[];

  constructor(public http : HttpClient) { }

  getWeather(city){
  return this.http.get("http://api.openweathermap.org/data/2.5/weather?q=" + city + this.AppID);
  }
  getLocation(){
    return this.cities;
  }
}
 // http://api.openweathermap.org/data/2.5/weather?q=Pretoria,uk&APPID=6f13124d8ea8a9a97c98ed495d31cbc7