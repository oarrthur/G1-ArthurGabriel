import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Route } from '@angular/compiler/src/core';
import { CadastrarOrcamentoComponent } from './cadastrar-orcamento/cadastrar-orcamento.component';
import { ImprimirOrcamentoComponent } from './imprimir-orcamento/imprimir-orcamento.component';
import { HomeComponent } from './home/home.component';

const rotas: Routes = [
  {path: 'orcamentos', component: CadastrarOrcamentoComponent},
  {path: 'orcamentos/:id/imprimir', component: ImprimirOrcamentoComponent},
  {path: '', component: HomeComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    CadastrarOrcamentoComponent,
    ImprimirOrcamentoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(rotas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
