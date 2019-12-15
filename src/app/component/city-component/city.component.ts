import { ViewEncapsulation, Component } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
import { City } from 'src/app/dto/city.dto';
import { weatherApi } from 'src/app/constant/api.constant';
import { WeatherDetails } from 'src/app/dto/weather.dto';

@Component({
    selector: 'app-city-page',
    templateUrl: './city.component.html',
    styleUrls: ['./city.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class CityComponent {
    offset: number;
    cities: Array<City>;
    isCityLoad: boolean;
    selectedCities: Array<City>;
    constructor(
        private apiService: ApiService
    ) {
        this.isCityLoad = false;
        this.offset = 0;
        this.cities = [] as City[];
        this.selectedCities = [] as City[];
        this.getCities();
    }

    getCities() {
        try {
            this.apiService.getCities(this.offset).subscribe(res => {
                let cities: Array<City> = [];
                cities = res.data.map(ele => new City(ele));
                this.cities = [...this.cities, ...cities];
                this.isCityLoad = true;
            });
        } catch (e) {
        }
    }

    loadMoreCity() {
        this.isCityLoad = false;
        this.offset += 1;
        this.getCities();
    }

    selectCity(city: City, index: number) {
        const isCityFound: boolean = Boolean(this.selectedCities.find(ele => ele.id === city.id));
        if (isCityFound) {
            city.isSelected = false;
            this.selectedCities.splice(index, 1);
        } else {
            city.isSelected = true;
            this.selectedCities = [...this.selectedCities, city];
        }

    }

    async aboutCity(cityObj: City) {
        try {
            this.apiService.getCityDetails(`${cityObj.longitude},${cityObj.latitude}`, cityObj.name).subscribe(res => {
                console.log(res);
            });
        } catch (e) {
            console.log(e);
        }

    }

    async aboutWeather(cityObj: City) {
        if (cityObj.isWeather) {
            return;
        }
        try {
            const response = await fetch(`${weatherApi}lat=${cityObj.latitude}&lon=${cityObj.longitude}&appid=90f68f053e6f62bb128bf86e177aeaa6`);
            const myJson = await response.json();
            cityObj.weatherDetails = new WeatherDetails(myJson);
            cityObj.isWeather = true;

        } catch (e) {
            console.log(e);
        }

    }

}
