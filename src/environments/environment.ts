import { HttpHeaders } from '@angular/common/http';

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  AppHeaders: new HttpHeaders({
    // 'Content-Type': 'application/json; charset=utf8',
    // // tslint:disable-next-line:object-literal-key-quotes
    // 'Accept': 'application/json',
    // // tslint:disable-next-line:object-literal-key-quotes
    // // 'Authorization': 'DBRa6460ASD57ARVJI1ASDbf32d92',
    // // 'Access-Control-Allow-Origin': '*'

  }),
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.



// Rapid API requested header config
export const RapidapiHeader = {
  "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
  "x-rapidapi-key": "PFB8XZlzSqmshcH3yVFe7K15XVLwp1NzIgJjsn379gNc4GoMXz"

};

// Rapid API requested header config
export const ApiHeader = {
  "Access-Control-Allow-Origin": '*',
  "Access-Control-Allow-Headers": 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json'
};

