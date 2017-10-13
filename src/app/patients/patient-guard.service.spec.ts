import { TestBed, inject } from '@angular/core/testing';

import { PatientGuardService } from './patient-guard.service';

describe('PatientGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PatientGuardService]
    });
  });

  it('should be created', inject([PatientGuardService], (service: PatientGuardService) => {
    expect(service).toBeTruthy();
  }));
});
