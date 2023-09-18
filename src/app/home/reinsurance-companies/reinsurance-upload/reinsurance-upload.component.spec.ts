import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReinsuranceUploadComponent } from './reinsurance-upload.component';

describe('ReinsuranceUploadComponent', () => {
  let component: ReinsuranceUploadComponent;
  let fixture: ComponentFixture<ReinsuranceUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReinsuranceUploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReinsuranceUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
