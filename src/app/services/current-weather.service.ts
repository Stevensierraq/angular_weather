import { Injectable, isDevMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { map } from 'rxjs/operators'

import { environment } from '../../environments/environment';
import { Coords } from '../structures/coords.structures';
import { Weather } from '../structures/weather.structure';

@Injectable({
  providedIn: 'root'
})
export class CurrentWeatherService {

  public weatherSubject: Subject<any> = new Subject<any>();
  public weather$: Observable<any>;

  endpoint: string = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) {
    this.weather$ = this.weatherSubject.asObservable().pipe(
      map((data: any) => {
        const mainWeather = data.weather[0]
        const weather: Weather = {
          name: data.name,
          cod: data.cod,
          temp: data.main.temp,
          ...mainWeather
        }

        return weather;
      })
    )

    this.get({ lat: 4.627602, lon: -74.174066 });
  }

  get(coords: Coords) {
    const args: string = `?lat=${coords.lat}&lon=${coords.lon}&APPID=${environment.key}&units=metric`;
    this.http.get(this.endpoint + args).subscribe(this.weatherSubject);
  }
}
