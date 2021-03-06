import { Injectable } from '@angular/core'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { IPatient } from './patient';


@Injectable()
export class PatientService {
  private _mainApiUrl: string = 'http://localhost:3000/api/';
  private _patientUrl: string = this._mainApiUrl + 'patient/';

  constructor(private _http: HttpClient) {  }

  getApiObjects(): Observable<IPatient[]> {
    return this._http.get<IPatient[]>(this._patientUrl)
      .do(data => {
        // do nothing here -> to be removed later
        //console.log('All: ' + JSON.stringify(data));
      })
      .catch(this._handleError);
  }

  getApiObject(id: string): Observable<IPatient> {
    return this._http.get<IPatient>( this._patientUrl + id )
      .do(data => {
        console.log('All: ' + JSON.stringify(data));
      })
      .catch(this._handleError);
  }

  addApiObject(patient: IPatient): Observable<IPatient[]> {
    return this._http.post<IPatient[]>(
      this._patientUrl,
      patient
    )
      .do(data => {
        console.log('All: ' + JSON.stringify(data));
      })
      .catch(this._handleError);
  }

  deleteApiObject(id: string): Observable<IPatient> {
    return this._http.delete<IPatient>( this._patientUrl + id )
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
