import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


const API_URL = environment.API_URL;
const API_KEY = environment.API_KEY;

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeather(city?: string){
    return this.http.get(`${API_URL}/weather?q=${ city ? city : 'Nice'}&&appid=${API_KEY}`);
  }
}
