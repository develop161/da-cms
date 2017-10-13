import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PatientListComponent } from './patient-list.component';
import { PatientDetailComponent } from './patient-detail.component';
import { PatientService } from './patient.service';
import { PatientGuardService } from './patient-guard.service';

import { SharedModule } from '../shared/shared.module';
import { PatientNewComponent } from './patient-new.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'patients', component: PatientListComponent },
      { path: 'patients/:id',
        canActivate: [ PatientGuardService ],
        component: PatientDetailComponent },
      { path: 'patient-new', component: PatientNewComponent },
    ]),
    SharedModule,
  ],
  declarations: [
    PatientListComponent,
    PatientDetailComponent,
    PatientNewComponent
  ],
  providers: [
    PatientService,
    PatientGuardService
  ],
})
export class PatientModule { }
