import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultativosEspecialComponent } from './facultativos-especial.component';

describe('FacultativosEspecialComponent', () => {
  let component: FacultativosEspecialComponent;
  let fixture: ComponentFixture<FacultativosEspecialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultativosEspecialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultativosEspecialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
