import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReinsurerComponent } from './reinsurer.component';

describe('ReinsurerComponent', () => {
  let component: ReinsurerComponent;
  let fixture: ComponentFixture<ReinsurerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReinsurerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReinsurerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
