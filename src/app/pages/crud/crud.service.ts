import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CrudService {



  constructor(
    private _http: HttpClient,
  ) {
  }

  public getUsuarios(sortBy: any, order: any, page: any, perPage: any, query: any): Observable<any> {

    const params = new HttpParams().set('sortBy', sortBy).set('page', page).set('query', query).set('perPage', perPage).set('order', order)
    return this._http.get('encuestas', {
      params: params,
      headers: {noLoading: 'true'}
    });
  }

  public destinatarios(): Observable<any> {
    return this._http.get('encuestas/destinatarios', {
      headers: {noLoading: 'true'}
    });
  }


  public create(body: any): Observable<any> {
    return this._http.post('encuestas', body);

  }

  public show(id: number): Observable<any> {
    return this._http.get(`encuestas/${id}`);
  }

  public getRole(): any {
    return JSON.parse(localStorage.getItem('role')!);
  }

  public update(id: number, body: any): Observable<any> {
    return this._http.put(`encuestas/${id}`, body);
  }

  public delete(id: number): Observable<any> {
    return this._http.delete(`encuestas/${id}`);
  }

}
