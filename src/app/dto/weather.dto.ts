import * as moment from 'moment';
export class WeatherDetails {
    feelslike: number;
    humidity: number;
    pressure: number;
    temp: number;
    tempmax: number;
    tempmin: number;
    sunrise: moment.Moment;
    sunset: moment.Moment;
    deg: number;
    speed: number;
    constructor(data?) {
        this.feelslike = data.main.feels_like;
        this.humidity = data.main.humidity;
        this.pressure = data.main.pressure;
        this.temp = data.main.temp;
        this.tempmax = data.main.temp_max;
        this.tempmin = data.main.temp_min;
        this.sunrise = moment(data.sys.sunrise);
        this.sunset = moment(data.sys.sunset);
        this.deg = data.wind.deg;
        this.speed = data.wind.speed;
    }
}
