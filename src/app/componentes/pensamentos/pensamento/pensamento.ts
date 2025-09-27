import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  imports: [],
  templateUrl: './pensamento.html',
  styleUrl: './pensamento.css'
})
export class Pensamento {

  @Input() pensamento = {
    id: 1,
    conteudo: 'Aprendendo Angular',
    autoria: 'Alexandre',
    modelo: 'modelo1'
  }
}
