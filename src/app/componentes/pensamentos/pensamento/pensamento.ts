import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { PensamentoInterface } from '../pensamento';
import { RouterLink } from '@angular/router';

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
    modelo: 'modelo1'
  }

  larguraPensamento(): string {
    if (this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g';
    }
    return 'pensamento-p';
  }
}
