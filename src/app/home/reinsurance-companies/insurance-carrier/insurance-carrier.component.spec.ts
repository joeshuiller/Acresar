import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceCarrierComponent } from './insurance-carrier.component';

describe('InsuranceCarrierComponent', () => {
  let component: InsuranceCarrierComponent;
  let fixture: ComponentFixture<InsuranceCarrierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsuranceCarrierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuranceCarrierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
