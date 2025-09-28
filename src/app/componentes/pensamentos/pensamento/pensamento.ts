import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { PensamentoInterface } from '../pensamento';
import { RouterLink } from '@angular/router';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-pensamento',
  imports: [NgClass, RouterLink],
  templateUrl: './pensamento.html',
  styleUrl: './pensamento.css'
})
export class Pensamento {

  @Input() pensamento: PensamentoInterface = {
    id: 1,
    conteudo: 'Aprendendo Angular',
    autoria: 'Alexandre',
    modelo: 'modelo1',
    favorito: false
  }

  constructor(private service: PensamentoService) { }

  larguraPensamento(): string {
    if (this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g';
    }
    return 'pensamento-p';
  }

  mudarIconeFavorito(): string {
    if (this.pensamento.favorito) {
      return 'ativo';
    }
    return 'inativo';
  }

  atualizarFavoritos(): void {
    this.service.mudarFavorito(this.pensamento).subscribe();
  }
}
