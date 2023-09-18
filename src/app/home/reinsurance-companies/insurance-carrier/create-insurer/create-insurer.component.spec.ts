import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateInsurerComponent } from './create-insurer.component';

describe('CreateInsurerComponent', () => {
  let component: CreateInsurerComponent;
  let fixture: ComponentFixture<CreateInsurerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateInsurerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateInsurerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
