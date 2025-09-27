import { Component, signal } from '@angular/core';
import { Cabecalho } from "./componentes/cabecalho/cabecalho";
import { Rodape } from "./componentes/rodape/rodape";
import { CriarPensamento } from "./componentes/pensamentos/criar-pensamento/criar-pensamento";
import { ListarPensamento } from "./componentes/pensamentos/listar-pensamento/listar-pensamento";
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [Cabecalho, Rodape, CriarPensamento, ListarPensamento, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('memoteca');
}
