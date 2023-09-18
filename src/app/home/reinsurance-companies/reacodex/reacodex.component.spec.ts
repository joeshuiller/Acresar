import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReacodexComponent } from './reacodex.component';

describe('ReacodexComponent', () => {
  let component: ReacodexComponent;
  let fixture: ComponentFixture<ReacodexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReacodexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReacodexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
