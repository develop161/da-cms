import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable()
export class PatientGuardService implements CanActivate {

  constructor(private _router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean{
    let id = route.url[1].path;
    if (!id){
      alert('Invalid patient id provided! Please contact your IT-department to fix this.');
      this._router.navigate(['/patients']);
      return false;
    }
    return true;
  }

}
