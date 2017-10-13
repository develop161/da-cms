import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IMedication } from './medication';
import { Medication } from '../models/medication.model';
import { MedicationService } from './medication.service';

@Component({
  selector: 'cms-medication-new',
  templateUrl: './medication-new.component.html',
  styleUrls: ['./medication-new.component.scss']
})

export class MedicationNewComponent {
  pageTitle: string = 'Register a new medication';
  medication: IMedication = new Medication('', '', '');
  errorMessage: string;
  successMessage: string;

  constructor(private _medicationService: MedicationService,
              private _router: Router) { }

  onSubmit() {

    // do here some checks

    // update data

    // save data
    this._medicationService.addApiObject(this.medication)
      .subscribe(medication => {
          // output success
          this.successMessage = 'Medication is saved in db';
          // re-initialize component
          this.medication = new Medication('', '', '');
        },
        error => this.errorMessage = <any>error);
  }

  onBack(): void {
    this._router.navigate(['/medications']);
  }

}
