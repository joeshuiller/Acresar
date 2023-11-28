import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuotaEditComponent } from './cuota-edit.component';

describe('CuotaEditComponent', () => {
  let component: CuotaEditComponent;
  let fixture: ComponentFixture<CuotaEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuotaEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuotaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
