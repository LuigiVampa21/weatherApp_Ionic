import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  temperature: any;
  date = new Date();
  city: string;
  icon: string;
  finalIcon: string;
  name: string;
  isLoading: boolean;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(){
  }

  loadData(){
    this.isLoading = true;
    this.weatherService.getWeather(this.city)
        .subscribe( (data: any) => {
          this.temperature = data.main;
          this.name = data.name;
          this.icon = data.weather[0].icon;
          this.finalIcon = `http://openweathermap.org/img/wn/${this.icon}@4x.png`;
          this.isLoading = false;
        });
  }

}

