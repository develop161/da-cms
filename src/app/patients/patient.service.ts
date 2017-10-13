import { Injectable } from '@angular/core'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { IPatient } from './patient'


@Injectable()
export class PatientService {
  private _mainApiUrl: string = 'http://localhost:3000/api/';
  private _patientUrl: string = this._mainApiUrl + 'patient/';

  constructor(private _http: HttpClient) {}

  getPatients(): Observable<IPatient[]> {
    return this._http.get<IPatient[]>(this._patientUrl)
      .do(data => {
        // do nothing here -> to be removed later
        //console.log('All: ' + JSON.stringify(data));
      })
      .catch(this._handleError);
  }

  getPatient(id: string): Observable<IPatient> {
    debugger;
    return this._http.get<IPatient>(this._patientUrl+id)
      .do(data => {
        console.log('All: ' + JSON.stringify(data));
        debugger;
      })
      .catch(this._handleError);
  }

  addPatient(): Observable<IPatient[]> {
    return this._http.post<IPatient[]>(
      this._patientUrl,
      {
        "firstName": "John",
        "lastName": "Doe",
        "address": "Homestead 120",
        "dateOfBirth": "1990-10-02T10:40:30.000Z",
        "visits": []
      }
    )
      .do(data => {
        console.log('All: ' + JSON.stringify(data));
        debugger;
      })
      .catch(this._handleError);
  }

  private _handleError(error: HttpErrorResponse) {
    console.log(error.message);
    return Observable.throw(error.message);
  }
}
