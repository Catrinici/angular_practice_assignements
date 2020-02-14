import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
	selector: 'app-seattle',
	templateUrl: './seattle.component.html',
	styleUrls: ['./seattle.component.css']
})


export class SeattleComponent implements OnInit {
	city = 98103;
	currentTemp: number = null;
	humidity: number = null;
	tempHi: number = null;
	tempLow: number = null;
	status: string = null;

	constructor(private httpService: HttpService) { }

	ngOnInit() {
		this.httpService.getWeather(this.city).subscribe(
			(currentCity: any = {}) => {
				this.currentTemp = currentCity.main.temp;
				this.humidity = currentCity.main.humidity;
				this.status = currentCity.weather[0].description;
				this.tempHi = currentCity.main.temp_max;
				this.tempLow = currentCity.main.temp_min
			}
		)
	}

}