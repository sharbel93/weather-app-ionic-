import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';
// import { Observable} from 'rxjs/Observable';
import { Storage } from "@ionic/storage";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  dataWeather: any;
  location: {
    city: string,
    country: string
  }
    getIconUrl: string;


  constructor(public navCtrl: NavController, private weatherProvider:WeatherProvider, private storage:Storage) {

      this.storage.get('location').then((val) => {
          if(val != null) {
this.location = JSON.parse(val);
          } else {
              this.location = {
                  city: 'Nairobi',
                  country: 'kenya'
              }
          }

          this.weatherProvider.getWeather(this.location.city, this.location.country).subscribe( (data:any) =>
          {
              console.log('full data from api',data);
              // http://openweathermap.org/img/w/10d.png
              this.dataWeather = data;
              // let iconCode = this.dataWeather.weather[0].icon;
              // console.log('iconCode',iconCode);
              // let iconUrl = "http://openweathermap.org/img/w/"+ iconCode + ".png";
              // console.log('IconUrl',iconUrl);
              // this.getIconUrl = iconUrl;
              // console.log('data based on weather object',this.dataWeather);
          });

      });

      // this.weatherProvider.getWeather(this.location.city, this.location.country).subscribe(data => this.dataWeather);
  }
}
