import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IVisit } from './visit';
import { VisitService } from './visit.service';


// Angular decorator: metadata + template
@Component({
  selector: 'cms-visits',
  templateUrl: './visit-list.component.html'
})

// Angular class of root component -> convention is to call it AppComponent
export class VisitListComponent implements OnInit {
  pageTitle: string = 'Visit List';
  errorMessage: string;

  // property visits: array of my visits
  visits: IVisit[];

  filteredVisits: IVisit[];
  _listFilter: string;

  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value) {
    this._listFilter = value;
    this.filteredVisits = this.listFilter ? this.performFilter(this.listFilter) : this.visits;
  }

  constructor(private _visitService: VisitService,
              private _router: Router) {
  }

  // by convention,methods are ormally created fter all of the properties are defined
  showDetails(id: string): void {
    this._router.navigate([`/visits/${id}`]);
  }

  performFilter(filterBy: string): IVisit[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.visits.filter((visit: IVisit) =>
      visit.reasonOfVisit.toLocaleLowerCase().indexOf(filterBy) !== -1 || visit.consult.toLocaleLowerCase().indexOf(filterBy) !== -1
    );
  }
  // perform component init actions, typically used to retrieve data from backend
  ngOnInit(): void {
    console.log('onInit activated');
    // retrieve all visits from web server
    this._visitService.getApiObjects()
      .subscribe(visits => {
          this.visits = visits;
          this.filteredVisits = this.visits;
        },
        error => this.errorMessage = <any>error);
  }

  onNewVisit(): void {
    this._router.navigate(['/visit-new']);
  }
}
