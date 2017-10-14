import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IVisit } from './visit';
import { Visit } from '../models/visit.model';
import { VisitService } from './visit.service';
import { PatientService } from '../patients/patient.service';
import { MedicationService } from '../medications/medication.service';

@Component({
  selector: 'cms-visit-new',
  templateUrl: './visit-new.component.html'
})

export class VisitNewComponent {
  pageTitle: string = 'Register a new visit';
  visit: IVisit = new Visit('', '', '', Date.now().toString(), []);
  patients: any;
  medications: any;
  errorMessage: string;
  successMessage: string;

  constructor(private _visitService: VisitService,
              private _patientService: PatientService,
              private _medicationService: MedicationService,
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
          this.visit = new Visit('', '', '', Date.now().toString(), []);
        },
        error => this.errorMessage = <any>error);
  }

  onBack(): void {
    this._router.navigate(['/visits']);
  }

  ngOnInit(): void {
    // retrieve all visits
    this._patientService.getApiObjects()
      .subscribe(patients => {
          this.patients = patients;
        },
        error => this.errorMessage = <any>error);

    this._medicationService.getApiObjects()
      .subscribe(medications => {
          this.medications = medications;
        },
        error => this.errorMessage = <any>error);
  }

}
