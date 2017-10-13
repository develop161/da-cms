import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IPatient } from './patient';
import { Patient } from '../models/patient.model';
import { PatientService } from './patient.service';

@Component({
  selector: 'cms-patient-new',
  templateUrl: './patient-new.component.html',
  styleUrls: ['./patient-new.component.scss']
})

export class PatientNewComponent {
  pageTitle: string = 'Register a new patient';
  patient: IPatient = new Patient('', '', '', '');
  errorMessage: string;
  successMessage: string;

  constructor(private _patientService: PatientService,
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
          this.patient = new Patient('', '', '', '');
        },
        error => this.errorMessage = <any>error);
  }

  onBack(): void {
    this._router.navigate(['/patients']);
  }

}
