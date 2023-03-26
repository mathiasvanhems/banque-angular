import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Operation } from '../models/operation.model';

@Injectable({
  providedIn: 'root'
})
export class OperationService {

  baseApiUrl:string=environment.apiUrl+'/operation';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getAllOperation():Observable<Operation[]>{
    return this.http.get<Operation[]>(this.baseApiUrl)

  }

  /** GET Operation by id. Will 404 if id not found */
  getOperation(id: number): Observable<Operation> {
    return this.http.get<Operation>(this.baseApiUrl+'/edit/'+id);
  }

  /** POST: update the Operation on the server */
  updateOperation(operation: Operation): Observable<any> {
    return this.http.post(this.baseApiUrl+'/save', operation, this.httpOptions);
  }

  deleteOperation(id: number):Observable<Operation>{
    return this.http.delete<Operation>(this.baseApiUrl+'/delete/'+id, this.httpOptions);
  }
}
