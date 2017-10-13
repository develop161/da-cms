import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IMedication } from './medication';
import { MedicationService } from './medication.service';


// Angular decorator: metadata + template
@Component({
  selector: 'cms-medications',
  templateUrl: './medication-list.component.html',
  styleUrls: ['./medication-list.component.scss']
})

// Angular class of root component -> convention is to call it AppComponent
export class MedicationListComponent implements OnInit {
  pageTitle: string = 'Medication List';
  errorMessage: string;

  // property medications: array of my medications
  medications: IMedication[];

  filteredMedications: IMedication[];
  _listFilter: string;

  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value) {
    this._listFilter = value;
    this.filteredMedications = this.listFilter ? this.performFilter(this.listFilter) : this.medications;
  }

  constructor(private _medicationService: MedicationService,
              private _router: Router) {
  }

  // by convention,methods are ormally created fter all of the properties are defined
  showDetails(id: string): void {
    this._router.navigate([`/medications/${id}`]);
  }

  performFilter(filterBy: string): IMedication[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.medications.filter((medication: IMedication) =>
      medication.name.toLocaleLowerCase().indexOf(filterBy) !== -1 || medication.dose.toLocaleLowerCase().indexOf(filterBy) !== -1
    );
  }
  // perform component init actions, typically used to retrieve data from backend
  ngOnInit(): void {
    console.log('onInit activated');

    // retrieve all medications from web server
    this._medicationService.getApiObjects()
      .subscribe(medications => {
          this.medications = medications;
          this.filteredMedications = this.medications;
        },
        error => this.errorMessage = <any>error);
  }

  onNewMedication(): void {
    this._router.navigate(['/medication-new']);
  }
}
