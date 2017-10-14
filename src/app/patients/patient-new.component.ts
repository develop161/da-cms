import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IPatient } from './patient';
import { Patient } from '../models/patient.model';
import { PatientService } from './patient.service';
import { VisitService } from '../visits/visit.service';

@Component({
  selector: 'cms-patient-new',
  templateUrl: './patient-new.component.html'
})

export class PatientNewComponent {
  pageTitle: string = 'Register a new patient';
  patient: IPatient = new Patient('', '', '', Date.now().toString());
  visits: any;
  errorMessage: string;
  successMessage: string;

  constructor(private _patientService: PatientService,
              private _visitService: VisitService,
              private _router: Router) {
  }

  onSubmit() {

    // do here some checks

    // update data

    // save data
    this._patientService.addApiObject(this.patient)
      .subscribe(patient => {
          // output success
          this.successMessage = 'Patient is saved in db';
          // re-initialize component
          this.patient = new Patient('', '', '', Date.now().toString());
          this.errorMessage = '';
        },
        error => {
          this.errorMessage = <any>error;
          this.successMessage = '';
        });
  }

  onBack(): void {
    this._router.navigate(['/patients']);
  }

  ngOnInit(): void {
    // retrieve all visits
    this._visitService.getApiObjects()
      .subscribe(visits => {
        this.visits = visits;
        },
        error => this.errorMessage = <any>error);
  }

}
