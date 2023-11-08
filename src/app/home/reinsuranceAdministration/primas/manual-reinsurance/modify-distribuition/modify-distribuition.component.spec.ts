import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyDistribuitionComponent } from './modify-distribuition.component';

describe('ModifyDistribuitionComponent', () => {
  let component: ModifyDistribuitionComponent;
  let fixture: ComponentFixture<ModifyDistribuitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyDistribuitionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyDistribuitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
