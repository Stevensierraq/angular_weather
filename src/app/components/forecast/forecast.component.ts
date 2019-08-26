import { Component, OnInit } from '@angular/core';
import { ForcastServiceService } from 'src/app/services/forcast-service.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {

  constructor(public forecastService: ForcastServiceService) { }

  ngOnInit() {
  }

}
