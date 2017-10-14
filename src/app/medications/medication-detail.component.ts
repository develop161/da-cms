import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IMedication } from './medication';
import { MedicationService } from './medication.service';

@Component({
  templateUrl: './medication-detail.component.html'
})
export class MedicationDetailComponent implements OnInit {
  pageTitle: string = 'Medication Detail';
  medication: IMedication;
  errorMessage: string;
  id: string;

  constructor(private _route: ActivatedRoute,
              private _medicationService: MedicationService,
              private _router: Router) {
  }

  ngOnInit(): void {
    // get id of object
    this.id = this._route.snapshot.paramMap.get('id');

    // retrieve data
    this._medicationService.getApiObject(this.id)
      .subscribe(medication => {
          this.medication = medication;
        },
        error => this.errorMessage = <any>error);
  }

  onBack(): void {
    this._router.navigate(['/medications']);
  }

  onDelete(): void {

    // delete object
    this._medicationService.deleteApiObject(this.id)
      .subscribe(medication => {
          // return to main page
          this._router.navigate(['/medications']);
        },
        error => this.errorMessage = <any>error);

  }
}
