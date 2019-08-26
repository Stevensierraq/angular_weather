import { Component, OnInit } from '@angular/core';
import { CurrentWeatherService } from 'src/app/services/current-weather.service';
import { Observer, Subscribable } from 'rxjs';

import { Weather } from '../../structures/weather.structure'

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent implements OnInit {

  public weather: Subscribable<Weather>;

  constructor(public weatherService: CurrentWeatherService) { 
    this.weather = this.weatherService.weather$;
  }

  ngOnInit() {}

}
