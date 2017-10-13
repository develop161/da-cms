import { Injectable } from '@angular/core'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { IMedication } from './medication';


@Injectable()
export class MedicationService {
  private _mainApiUrl: string = 'http://localhost:3000/api/medication/';

  constructor(private _http: HttpClient) {  }

  getApiObjects(): Observable<IMedication[]> {
    return this._http.get<IMedication[]>(this._mainApiUrl)
      .do(data => {
        // do nothing here -> to be removed later
        //console.log('All: ' + JSON.stringify(data));
      })
      .catch(this._handleError);
  }

  getApiObject(id: string): Observable<IMedication> {
    return this._http.get<IMedication>( this._mainApiUrl + id )
      .do(data => {
        console.log('All: ' + JSON.stringify(data));
      })
      .catch(this._handleError);
  }

  addApiObject(patient: IMedication): Observable<IMedication[]> {
    return this._http.post<IMedication[]>(
      this._mainApiUrl,
      patient
    )
      .do(data => {
        console.log('All: ' + JSON.stringify(data));
      })
      .catch(this._handleError);
  }

  deleteApiObject(id: string): Observable<IMedication> {
    return this._http.delete<IMedication>( this._mainApiUrl + id )
      .do(data => {
        console.log('All: ' + JSON.stringify(data));
      })
      .catch(this._handleError);
  }

  private _handleError(error: HttpErrorResponse) {
    console.log(error.message);
    return Observable.throw(error.message);
  }
}
