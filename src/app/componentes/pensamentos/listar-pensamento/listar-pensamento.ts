import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Pensamento } from "../pensamento/pensamento";

@Component({
  selector: 'app-listar-pensamento',
  imports: [RouterLink, Pensamento],
  templateUrl: './listar-pensamento.html',
  styleUrl: './listar-pensamento.css'
})
export class ListarPensamento {
  listaPensamentos = [
    {
      id: 1,
      conteudo: 'Comunicação é a chave para o sucesso.',
      autoria: 'Alexandre',
      modelo: 'modelo1'
    },
    {
      id: 2,
      conteudo: 'Comunicação com o componente filho.',
      autoria: 'Alexandre',
      modelo: 'modelo2'
    },
    {
      id: 3,
      conteudo: 'Comunicação com o componente filho. Comunicação com o componente filho. Comunicação com o componente filho. Comunicação com o componente filho. Comunicação com o componente filho. Comunicação com o componente filho. Comunicação com o componente filho. Comunicação com o componente filho. Comunicação com o componente filho. Comunicação com o componente filho. Comunicação com o componente filho.',
      autoria: 'Alexandre',
      modelo: 'modelo2'
    },
  ];
}
