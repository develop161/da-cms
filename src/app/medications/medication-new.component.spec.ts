import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicationNewComponent } from './medication-new.component';

describe('MedicationNewComponent', () => {
  let component: MedicationNewComponent;
  let fixture: ComponentFixture<MedicationNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicationNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicationNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
