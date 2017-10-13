import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { PatientModule } from './patients/patient.module';
import { AppRoutingModule } from './app-routing.module';
import { MedicationModule } from './medications/medication.module';
import { VisitModule } from './visits/visit.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    PatientModule,
    MedicationModule,
    VisitModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
