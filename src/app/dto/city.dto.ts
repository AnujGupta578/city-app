import { WeatherDetails } from './weather.dto';

export class City {
    city: string;
    country: string;
    countryCode: string;
    id: number;
    latitude: number;
    longitude: number;
    name: string;
    region: string;
    regionCode: string;
    type: string;
    wikiDataId: string;
    weatherDetails: WeatherDetails;
    isWeather: boolean;
    isSelected: boolean;
    constructor(data?) {
        this.city = data.city;
        this.country = data.country;
        this.countryCode = data.countryCode;
        this.id = data.id;
        this.latitude = data.latitude;
        this.longitude = data.longitude;
        this.name = data.name;
        this.region = data.region;
        this.regionCode = data.regionCode;
        this.type = data.type;
        this.wikiDataId = data.wikiDataId;
        this.weatherDetails = {} as WeatherDetails;
        this.isWeather = false;
        this.isSelected = false;
    }
}
