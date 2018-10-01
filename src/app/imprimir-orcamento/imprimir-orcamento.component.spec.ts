import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprimirOrcamentoComponent } from './imprimir-orcamento.component';

describe('ImprimirOrcamentoComponent', () => {
  let component: ImprimirOrcamentoComponent;
  let fixture: ComponentFixture<ImprimirOrcamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImprimirOrcamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImprimirOrcamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
