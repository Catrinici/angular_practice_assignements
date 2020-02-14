import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
	providedIn: 'root'
})
export class HttpService {

	constructor(private _http: HttpClient) { }

	getWeather(cityname) {
		return this._http.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid={b433edb09065e7d05581bb19ffd63c58}`)
	}


}