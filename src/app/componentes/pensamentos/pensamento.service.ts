import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PensamentoInterface } from './pensamento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {
  private readonly API = 'http://localhost:3000/pensamentos';

  constructor(private http: HttpClient) { }

  listar(pagina: number, filtro: string, favorito: boolean): Observable<PensamentoInterface[]> {
    const itensPorPagina = 6;
    let params = new HttpParams()
      .set('_page', pagina)
      .set('_limit', itensPorPagina);

    if (filtro.trim().length > 2) {
      params = params.set('q', filtro);
    }

    if (favorito) {
      params = params.set('favorito', true);
    }

    return this.http.get<PensamentoInterface[]>(this.API, { params: params });
  }

  criar(pensamento: PensamentoInterface): Observable<PensamentoInterface> {
    return this.http.post<PensamentoInterface>(this.API, pensamento);
  }

  editar(pensamento: PensamentoInterface): Observable<PensamentoInterface> {
    const url = `${this.API}/${pensamento.id}`;
    return this.http.put<PensamentoInterface>(url, pensamento);
  }

  excluir(id: number): Observable<PensamentoInterface> {
    const url = `${this.API}/${id}`;
    return this.http.delete<PensamentoInterface>(url);
  }

  buscarPorId(id: number): Observable<PensamentoInterface> {
    const url = `${this.API}/${id}`;
    return this.http.get<PensamentoInterface>(url);
  }

  mudarFavorito(pensamento: PensamentoInterface): Observable<PensamentoInterface> {
    pensamento.favorito = !pensamento.favorito;
    return this.editar(pensamento);
  }
}
