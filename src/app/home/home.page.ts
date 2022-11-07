import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { tap } from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  temperature: any;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(){
    this.loadData();
  }

  loadData(){
    this.weatherService.getWeather()
        .subscribe( (data: any) => {
          this.temperature = data.main;
        });
  }

}

