import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IVisit } from './visit';
import { VisitService } from './visit.service';

@Component({
  templateUrl: './visit-detail.component.html'
})
export class VisitDetailComponent implements OnInit {
  pageTitle: string = 'Visit Detail';
  visit: IVisit;
  errorMessage: string;
  id: string;

  constructor(private _route: ActivatedRoute,
              private _visitService: VisitService,
              private _router: Router) {
  }

  ngOnInit(): void {
    // get id of object
    this.id = this._route.snapshot.paramMap.get('id');

    // retrieve data
    this._visitService.getApiObject(this.id)
      .subscribe(visit => {
          this.visit = visit;
        },
        error => this.errorMessage = <any>error);
  }

  onBack(): void {
    this._router.navigate(['/visits']);
  }

  onDelete(): void {

    // delete object
    this._visitService.deleteApiObject(this.id)
      .subscribe(visit => {
          // return to main page
          this._router.navigate(['/visits']);
        },
        error => this.errorMessage = <any>error);

  }
}
