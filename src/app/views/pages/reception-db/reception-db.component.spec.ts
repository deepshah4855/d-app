import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptionDBComponent } from './reception-db.component';

describe('ReceptionDBComponent', () => {
  let component: ReceptionDBComponent;
  let fixture: ComponentFixture<ReceptionDBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceptionDBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceptionDBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
