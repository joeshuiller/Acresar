import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractAssociationContractFormComponent } from './contract-association-contract-form.component';

describe('ContractAssociationContractFormComponent', () => {
  let component: ContractAssociationContractFormComponent;
  let fixture: ComponentFixture<ContractAssociationContractFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractAssociationContractFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractAssociationContractFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
