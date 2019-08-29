import { Component } from '@angular/core';
import { ForcastServiceService } from './services/forcast-service.service';
import { GeolocationService } from './services/geolocation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'weather';

  constructor(private geolocationService : GeolocationService) {

   }

  ngOnInit() {
  }
}
