import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Banque } from '../models/banque.model';

@Injectable({
  providedIn: 'root'
})
export class BanqueService {

  baseApiUrl:string=environment.apiUrl+'/banque';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getAllBanque():Observable<Banque[]>{
    return this.http.get<Banque[]>(this.baseApiUrl)

  }

  /** GET banque by id. Will 404 if id not found */
  getBanque(id: number): Observable<Banque> {
    return this.http.get<Banque>(this.baseApiUrl+'/edit/'+id);
  }

  /** POST: update the banque on the server */
  updateBanque(banque: Banque): Observable<any> {
    return this.http.post(this.baseApiUrl+'/save', banque, this.httpOptions);
  }

  deleteBanque(id: number):Observable<Banque>{
    return this.http.delete<Banque>(this.baseApiUrl+'/delete/'+id, this.httpOptions);
  }

}
