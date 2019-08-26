import { Component } from '@angular/core';
import { ForcastServiceService } from './services/forcast-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'weather';

  constructor(private forecastService: ForcastServiceService) {

   }

  ngOnInit() {
    this.forecastService.weather$.subscribe(console.log)
  }
}
