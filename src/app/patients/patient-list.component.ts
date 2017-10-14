import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IPatient } from './patient';
import { PatientService } from './patient.service';
import { PagerService } from '../shared/index'

// Angular decorator: metadata + template
@Component({
  selector: 'cms-patients',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss'],
  providers: [PagerService]
})

// Angular class of root component -> convention is to call it AppComponent
export class PatientListComponent implements OnInit {
  pageTitle: string = 'Patient List';
  errorMessage: string;
  reverse: boolean = false;
  propertyName: string = 'firstName';
  // property visits: array of my visits
  patients: IPatient[];
  filteredPatients: IPatient[];
  _listFilter: string;

  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[];

  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value) {
    this._listFilter = value;
    this.filteredPatients = this.listFilter ? this.performFilter(this.listFilter) : this.patients;
    // restore page when search filter deleted
    if (!value) {
      this.filteredPatients = this.patients;
    }
    // re-apply paging
    this.setPage(1);
  }

  constructor(private _patientService: PatientService,
              private _pagerService: PagerService,
              private _router: Router) {
  }

  // by convention,methods are ormally created fter all of the properties are defined
  showDetails(id: string): void {
    this._router.navigate([`/patients/${id}`]);
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

    // retrieve all visits from web server
    this._patientService.getApiObjects()
      .subscribe(patients => {
          this.patients = patients;
          this.filteredPatients = this.patients;
          // initialize to page 1
          this.setPage(1);
        },
        error => this.errorMessage = <any>error);
  }

  onNewPatient(): void {
    this._router.navigate(['/patient-new']);
  }

  sortBy(propertyName: string): void{
    this.filteredPatients.sort(
      (a: IPatient, b: IPatient): number => {
        let property = this.propertyName;
        if (a[property] < b[this.propertyName]){
          if(this.reverse) return 1;
          return -1;
        }
        if (a[this.propertyName] > b[this.propertyName]){
          if(this.reverse) return -1;
          return 1;
        }
        return 0;
      }
    );

    this.reverse = (this.propertyName === propertyName) ? !this.reverse : false;
    this.propertyName = propertyName;
    // re-apply paging
    this.setPage(1);
  }

  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
        return;
    }

    // get pager object from service
    this.pager = this._pagerService.getPager(this.filteredPatients.length, page);

    // get current page of items
    this.pagedItems = this.filteredPatients.slice(this.pager.startIndex, this.pager.endIndex + 1);
}

}
