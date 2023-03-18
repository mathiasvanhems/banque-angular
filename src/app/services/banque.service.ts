import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Banque } from '../models/banque.model';

@Injectable({
  providedIn: 'root'
})
export class BanqueService {

  baseApiUrl:String=environment.apiUrl;
  constructor(private http: HttpClient) { }

  getAllBanque():Observable<Banque[]>{
    return this.http.get<Banque[]>(this.baseApiUrl+'/banque')

  }
}
