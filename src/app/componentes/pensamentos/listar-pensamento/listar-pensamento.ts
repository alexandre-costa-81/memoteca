import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Pensamento } from "../pensamento/pensamento";
import { PensamentoInterface } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { BotaoCarregarMais } from "../listar-pensamentos/botao-carregar-mais/botao-carregar-mais";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-listar-pensamento',
  imports: [RouterLink, Pensamento, BotaoCarregarMais, FormsModule],
  templateUrl: './listar-pensamento.html',
  styleUrl: './listar-pensamento.css'
})
export class ListarPensamento {
  listaPensamentos: PensamentoInterface[] = [];
  paginaAtual: number = 1;
  haMaisPensamentos: boolean = true;
  filtro: string = '';
  favorito: boolean = false;
  listaFavoritos: PensamentoInterface[] = [];

  constructor(
    private service: PensamentoService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.service.listar(this.paginaAtual, this.filtro, this.favorito).subscribe((pensamentos) => {
      this.listaPensamentos = pensamentos;
    });
  }

  carregarMaisPensamentos(): void {
    this.service.listar(++this.paginaAtual, this.filtro, this.favorito).subscribe((pensamentos) => {
      this.listaPensamentos.push(...pensamentos);
      if (!pensamentos.length) {
        this.haMaisPensamentos = false;
      }
    });
  }

  pesquisarPensamentos(): void {
    this.haMaisPensamentos = true;
    this.paginaAtual = 1;
    this.service.listar(this.paginaAtual, this.filtro, this.favorito).subscribe((pensamentos) => {
      this.listaPensamentos = pensamentos;
    });
  }

  listarFavoritos(): void {
    this.favorito = true;
    this.haMaisPensamentos = true;
    this.paginaAtual = 1;
    this.service.listar(this.paginaAtual, this.filtro, this.favorito).subscribe((pensamentos) => {
      this.listaPensamentos = pensamentos;
      this.listaFavoritos = pensamentos;
    });
  }

  recarregarComponente(): void {
    this.favorito = false;
    this.haMaisPensamentos = true;
    this.paginaAtual = 1;
    this.service.listar(this.paginaAtual, this.filtro, this.favorito).subscribe((pensamentos) => {
      this.listaPensamentos = pensamentos;
      this.listaFavoritos = pensamentos;
    });
  }
}
