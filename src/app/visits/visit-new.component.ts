import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IVisit } from './visit';
import { Visit } from '../models/visit.model';
import { VisitService } from './visit.service';

@Component({
  selector: 'cms-visit-new',
  templateUrl: './visit-new.component.html',
  styleUrls: ['./visit-new.component.scss']
})

export class VisitNewComponent {
  pageTitle: string = 'Register a new visit';
  visit: IVisit = new Visit('', '', '', '', []);
  errorMessage: string;
  successMessage: string;

  constructor(private _visitService: VisitService,
              private _router: Router) { }

  onSubmit() {

    // do here some checks

    // update data

    // save data
    this._visitService.addApiObject(this.visit)
      .subscribe(visit => {
          // output success
          this.successMessage = 'Visit is saved in db';
          // re-initialize component
          this.visit = new Visit('', '', '', '', []);
        },
        error => this.errorMessage = <any>error);
  }

  onBack(): void {
    this._router.navigate(['/visits']);
  }

}
