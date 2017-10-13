import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { VisitListComponent } from './visit-list.component';
import { VisitDetailComponent } from './visit-detail.component';
import { VisitNewComponent } from './visit-new.component';
import { VisitService } from './visit.service';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'visits', component: VisitListComponent },
      { path: 'visits/:id',
        component: VisitDetailComponent },
      { path: 'visit-new', component: VisitNewComponent },
    ]),
    SharedModule
  ],
  declarations: [
    VisitListComponent,
    VisitDetailComponent,
    VisitNewComponent
  ],
  providers: [
    VisitService,
  ],
})
export class VisitModule { }
