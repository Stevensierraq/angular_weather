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
export class ForcastServiceService {

  public weatherSubject: Subject<any> = new Subject<any>();
  public weather$: Observable<any>;

  endpoint: string = 'https://api.openweathermap.org/data/2.5/forecast';

  constructor(private http: HttpClient) {
    this.weather$ = this.weatherSubject.asObservable().pipe(map(this.structureData))

    this.get({ lat: 4.627602, lon: -74.174066 });
  }

  structureData(data: any){
    let minMaxPerDay = {};
    data.list.forEach(weatherObj => {

      const date = new Date(weatherObj.dt * 1000);
      const hours = date.getHours();
      const month = date.getMonth();
      const day = date.getDay();
      const key = `${month}-${day}`

      let tempPerDay: Weather = {
        minMaxTemp: {}
      }

      if(!tempPerDay.cod || hours == 16){
        const source = weatherObj.weather[0];
        tempPerDay = {...tempPerDay, ...source};
        tempPerDay.cod = source.id;
        tempPerDay.name = data.city.name;
      }

      if(!tempPerDay.minMaxTemp.min || (weatherObj.main.temp_min < tempPerDay.minMaxTemp.min)) tempPerDay.minMaxTemp.min = weatherObj.main.temp_min;

      if(!tempPerDay.minMaxTemp.max || (tempPerDay.minMaxTemp.max > weatherObj.main.temp_max)) tempPerDay.minMaxTemp.max = weatherObj.main.temp_max;

      minMaxPerDay[key] = tempPerDay;
    });

    return Object.values(minMaxPerDay);
  }

  get(coords: Coords) {
    const args: string = `?lat=${coords.lat}&lon=${coords.lon}&APPID=${environment.key}&units=metric`;
    this.http.get(this.endpoint + args).subscribe(this.weatherSubject);
  }
}
