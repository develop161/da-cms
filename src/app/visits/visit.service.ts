import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { IVisit } from './visit';


@Injectable()
export class VisitService {
  private _mainApiUrl: string = 'http://localhost:3000/api/visit/';

  constructor(private _http: HttpClient) {  }

  getApiObjects(): Observable<IVisit[]> {
    return this._http.get<IVisit[]>(this._mainApiUrl)
      .do(data => {
        // do nothing here -> to be removed later
        console.log('All: ' + JSON.stringify(data));
      })
      .catch(this._handleError);
  }

  getApiObject(id: string): Observable<IVisit> {
    return this._http.get<IVisit>( this._mainApiUrl + id )
      .do(data => {
        console.log('All: ' + JSON.stringify(data));
      })
      .catch(this._handleError);
  }

  addApiObject(visit: IVisit): Observable<IVisit[]> {
    return this._http.post<IVisit[]>(
      this._mainApiUrl,
      visit
    )
      .do(data => {
        console.log('All: ' + JSON.stringify(data));
      })
      .catch(this._handleError);
  }

  deleteApiObject(id: string): Observable<IVisit> {
    return this._http.delete<IVisit>( this._mainApiUrl + id )
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
