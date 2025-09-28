import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Pensamento } from "../pensamento/pensamento";
import { PensamentoInterface } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { BotaoCarregarMais } from "../listar-pensamentos/botao-carregar-mais/botao-carregar-mais";

@Component({
  selector: 'app-listar-pensamento',
  imports: [RouterLink, Pensamento, BotaoCarregarMais],
  templateUrl: './listar-pensamento.html',
  styleUrl: './listar-pensamento.css'
})
export class ListarPensamento {
  listaPensamentos: PensamentoInterface[] = [];
  paginaAtual: number = 1;
  haMaisPensamentos: boolean = true;

  constructor(private service: PensamentoService) {}

  ngOnInit(): void {
    this.service.listar(this.paginaAtual).subscribe((pensamentos) => {
      this.listaPensamentos = pensamentos;
    });
  }

  carregarMaisPensamentos(): void {
    this.service.listar(++this.paginaAtual).subscribe((pensamentos) => {
      this.listaPensamentos.push(...pensamentos);
      if (!pensamentos.length) {
        this.haMaisPensamentos = false;
      }
    });
  }
}
