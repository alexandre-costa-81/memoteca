import { Component } from '@angular/core';
import { PensamentoInterface } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-excluir-pensamento',
  imports: [],
  templateUrl: './excluir-pensamento.html',
  styleUrl: './excluir-pensamento.css'
})
export class ExcluirPensamento {
  pensamento: PensamentoInterface = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  constructor(
    private service: PensamentoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.service.buscarPorId(+id).subscribe((pensamento) => {
        this.pensamento = pensamento;
      });
    }
  }

  excluirPensamento(): void {
    if (!this.pensamento.id) {
      return;
    }
    this.service.excluir(this.pensamento.id).subscribe(() => {
      this.router.navigate(['/listarPensamento']);
    });
  }
  cancelar(): void {
    this.router.navigate(['/listarPensamento']);
  }
}