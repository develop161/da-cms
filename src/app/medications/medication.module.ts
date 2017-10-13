import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MedicationListComponent } from './medication-list.component';
import { MedicationDetailComponent } from './medication-detail.component';
import { MedicationNewComponent } from './medication-new.component';
import { MedicationService } from './medication.service';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'medications', component: MedicationListComponent },
      { path: 'medications/:id',
        component: MedicationDetailComponent },
      { path: 'medication-new', component: MedicationNewComponent },
    ]),
    SharedModule
  ],
  declarations: [
    MedicationListComponent,
    MedicationDetailComponent,
    MedicationNewComponent
  ],
  providers: [
    MedicationService,
  ],
})
export class MedicationModule { }
