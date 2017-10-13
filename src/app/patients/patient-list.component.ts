import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IPatient } from './patient';
import { PatientService } from './patient.service';


// Angular decorator: metadata + template
@Component({
  selector: 'cms-patients',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})

// Angular class of root component -> convention is to call it AppComponent
export class PatientListComponent implements OnInit {
  pageTitle: string = 'Patient List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  errorMessage: string;

  // property patients: array of my patients
  patients: IPatient[];

  filteredPatients: IPatient[];
  _listFilter: string;

  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value) {
    this._listFilter = value;
    this.filteredPatients = this.listFilter ? this.performFilter(this.listFilter) : this.patients;
  }

  constructor(private _patientService: PatientService,
              private _router: Router) {  }

  // by convention,methods are ormally created fter all of the properties are defined
  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  performFilter(filterBy: string): IPatient[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.patients.filter((patient: IPatient) =>
      patient.firstName.toLocaleLowerCase().indexOf(filterBy) !== -1 || patient.lastName.toLocaleLowerCase().indexOf(filterBy) !== -1
    );
  }
  // perform component init actions, typically used to retrieve data from backend
  ngOnInit(): void {
    console.log('onInit activated');

    // retrieve all patients from web server
    this._patientService.getPatients()
      .subscribe(patients => {
        debugger;
          this.patients = patients;
          this.filteredPatients = this.patients;
        },
        error => this.errorMessage = <any>error);

/*    this._patientService.addPatient()
      .subscribe(patient => {
          console.log(patient);
        },
        error => this.errorMessage = <any>error);*/
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Patient list: ' + message;
  }

  onNewPatient(): void {
    this._router.navigate(['/patient-new']);
  }
}
