import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterReinsurerComponent } from './register-reinsurer.component';

describe('RegisterReinsurerComponent', () => {
  let component: RegisterReinsurerComponent;
  let fixture: ComponentFixture<RegisterReinsurerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterReinsurerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterReinsurerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
