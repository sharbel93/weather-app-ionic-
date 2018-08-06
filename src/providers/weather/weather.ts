import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
// import {Headers, RequestOptions} from '@angular/http';

/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WeatherProvider {

    apiKey = '1daa5aeddaa1b34ae52294e349564915';
    url;
    public url2;
    test;
    // city;
    // country;

    constructor(public http: HttpClient) {

        this.url = 'http://api.openweathermap.org/data/2.5/weather?q=';
        console.log('yes it works', this.url);
    }

    getWeather(city, country) {
        // var headers = new Headers();
        // headers.append('Content-Type', 'application/x-www-form-urlencoded');
        // let options = new RequestOptions({ headers: headers });

        console.log('rest',this.http.get(this.url + city + ',' + country + '&APPID=' + this.apiKey));
        return this.http.get(this.url + city + ',' + country + '&APPID=' + this.apiKey);


    }


}
