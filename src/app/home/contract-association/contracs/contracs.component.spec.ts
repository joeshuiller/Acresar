import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContracsComponent } from './contracs.component';

describe('ContracsComponent', () => {
  let component: ContracsComponent;
  let fixture: ComponentFixture<ContracsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContracsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContracsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
