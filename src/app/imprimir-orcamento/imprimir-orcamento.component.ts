import { Component, OnInit } from '@angular/core';
import { OrcamentosService } from '../orcamentos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-imprimir-orcamento',
  templateUrl: './imprimir-orcamento.component.html',
  styleUrls: ['./imprimir-orcamento.component.css']
})
export class ImprimirOrcamentoComponent implements OnInit {
  orcamento = null;
  constructor(private orcamentosS: OrcamentosService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('Log:' + id);
    if (localStorage.length > 0) {
    this.orcamento = this.orcamentosS.encontrar(id);
    console.log('Orcamento:' + this.orcamento);
    this.orcamentosS.calcular(this.orcamento);
    } else {
      alert('Ainda não existe nenhum orçamento cadastrado!');
    }
  }

}
