import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReacoexReaseguradoraComponent } from './reacoex-reaseguradora.component';

describe('ReacoexReaseguradoraComponent', () => {
  let component: ReacoexReaseguradoraComponent;
  let fixture: ComponentFixture<ReacoexReaseguradoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReacoexReaseguradoraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReacoexReaseguradoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
