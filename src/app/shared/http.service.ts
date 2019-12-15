import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HttpService<TResource> {
    constructor(public http: HttpClient) {
    }

    /**
     * This is use for get data from get request
     */
    // tslint:disable-next-line:ban-types
    get(api: string, header: any): Observable<void | Object> {
        return this.http
            .get(api, { headers: header })
            .pipe(
                catchError(this.handleError)
            );
    }

    // tslint:disable-next-line:ban-types
    private handleError(error: void | Object): Promise<void> {
        return Promise.reject('error occured');
    }
}
