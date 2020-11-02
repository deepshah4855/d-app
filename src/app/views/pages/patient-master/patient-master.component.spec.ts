import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientMasterComponent } from './patient-master.component';

describe('PatientMasterComponent', () => {
  let component: PatientMasterComponent;
  let fixture: ComponentFixture<PatientMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
