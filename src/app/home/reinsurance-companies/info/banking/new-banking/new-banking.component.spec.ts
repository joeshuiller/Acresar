import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBankingComponent } from './new-banking.component';

describe('NewBankingComponent', () => {
  let component: NewBankingComponent;
  let fixture: ComponentFixture<NewBankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewBankingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
