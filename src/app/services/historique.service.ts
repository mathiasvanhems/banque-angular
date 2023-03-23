import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Historique } from '../models/historique.model';

@Injectable({
  providedIn: 'root'
})
export class HistoriqueService {

  baseApiUrl:string=environment.apiUrl+'/historique';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getAllHistorique():Observable<Historique[]>{
    return this.http.get<Historique[]>(this.baseApiUrl)

  }

  /** GET Historique by id. Will 404 if id not found */
  getHistorique(id: number): Observable<Historique> {
    return this.http.get<Historique>(this.baseApiUrl+'/edit/'+id);
  }

  /** POST: update the Historique on the server */
  updateHistorique(historique: Historique): Observable<any> {
    return this.http.post(this.baseApiUrl+'/save', historique, this.httpOptions);
  }

  deleteHistorique(id: number):Observable<Historique>{
    return this.http.delete<Historique>(this.baseApiUrl+'/delete/'+id, this.httpOptions);
  }
}
