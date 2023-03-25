import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TypeOperation } from '../models/typeOperation.model';

@Injectable({
  providedIn: 'root'
})
export class TypeOperationService {

  baseApiUrl:string=environment.apiUrl+'/type';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getAllTypeOperation():Observable<TypeOperation[]>{
    return this.http.get<TypeOperation[]>(this.baseApiUrl)

  }

  /** GET TypeOperation by id. Will 404 if id not found */
  getTypeOperation(id: number): Observable<TypeOperation> {
    return this.http.get<TypeOperation>(this.baseApiUrl+'/edit/'+id);
  }

  /** POST: update the TypeOperation on the server */
  updateTypeOperation(typeOperation: TypeOperation): Observable<any> {
    return this.http.post(this.baseApiUrl+'/save', typeOperation, this.httpOptions);
  }

  deleteTypeOperation(id: number):Observable<TypeOperation>{
    return this.http.delete<TypeOperation>(this.baseApiUrl+'/delete/'+id, this.httpOptions);
  }

}
