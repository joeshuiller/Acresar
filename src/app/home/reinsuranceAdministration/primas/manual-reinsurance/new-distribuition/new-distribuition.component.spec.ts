import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDistribuitionComponent } from './new-distribuition.component';

describe('NewDistribuitionComponent', () => {
  let component: NewDistribuitionComponent;
  let fixture: ComponentFixture<NewDistribuitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewDistribuitionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDistribuitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
