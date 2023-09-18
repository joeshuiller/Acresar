import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateInsurerComponent } from './update-insurer.component';

describe('UpdateInsurerComponent', () => {
  let component: UpdateInsurerComponent;
  let fixture: ComponentFixture<UpdateInsurerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateInsurerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateInsurerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
