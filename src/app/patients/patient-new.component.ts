import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IPatient } from './patient'
import { PatientService } from './patient.service';

@Component({
  selector: 'cms-patient-new',
  templateUrl: './patient-new.component.html',
  styleUrls: ['./patient-new.component.scss']
})
export class PatientNewComponent implements OnInit {

  pageTitle: string = 'Register a new patient';
  patient: IPatient;
  errorMessage: string;

  constructor(private _route: ActivatedRoute,
              private _patientService: PatientService,
              private _router: Router) { }

  ngOnInit() {
    debugger;

  }

}
