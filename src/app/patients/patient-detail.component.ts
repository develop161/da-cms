import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IPatient } from './patient'
import { PatientService } from './patient.service';

@Component({
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.css']
})
export class PatientDetailComponent implements OnInit {

  pageTitle: string = 'Patient Detail';
  patient: IPatient;
  errorMessage: string;

  constructor(private _route: ActivatedRoute,
              private _patientService: PatientService,
              private _router: Router) { }

  ngOnInit(): void {
    // get id of patient
    let id = this._route.snapshot.paramMap.get('id');

    // retrieve data of patient
    this._patientService.getPatient(id)
      .subscribe(patient => {
          this.patient = patient;
          this.pageTitle += `: ${patient.firstName} ${patient.lastName}`;
          },
        error => this.errorMessage = <any>error);

  }

  onBack(): void {
    this._router.navigate(['/patients']);
  }

}
