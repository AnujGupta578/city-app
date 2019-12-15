import { weatherApi } from './../constant/api.constant';
import { Observable } from 'rxjs';
// tslint:disable-next-line:quotemark
import { Injectable } from "@angular/core";
import { HttpService } from './http.service';
import { HttpClient } from '@angular/common/http';
import { cities, googlePlaceAPi, googlePlaceAPiKey } from '../constant/api.constant';
import { RapidapiHeader, ApiHeader } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class ApiService extends HttpService<any> {
    constructor(public http: HttpClient,
    ) {
        super(http);
    }

    getCities(offset: number): Observable<any> {
        return this.get(`${cities}?offset=${offset}&limit=10&countryIds=Q668`, RapidapiHeader);
    }

    getCityDetails(citylocation: string, cityname: string): Observable<any> {
        return this.get(`${googlePlaceAPi}api/place/nearbysearch/json?location=${citylocation}&radius=500&name=${cityname}&key=${googlePlaceAPiKey}`,
            ApiHeader);
    }
}

