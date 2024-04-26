import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurpValidatorComponent } from './curp-validator.component';

describe('CurpValidatorComponent', () => {
  let component: CurpValidatorComponent;
  let fixture: ComponentFixture<CurpValidatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurpValidatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurpValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
