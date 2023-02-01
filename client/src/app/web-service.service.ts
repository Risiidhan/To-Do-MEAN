import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WebServiceService {

  readonly SERVER_URL = `http://localhost:2000`;
  constructor(private http:HttpClient) { }

  get(uri:any):Observable<any>{
    return this.http.get<any>(`${this.SERVER_URL}/${uri}`)
  }

  post(uri:any, payload:object):Observable<any>{
    return this.http.post<any>(`${this.SERVER_URL}/${uri}`,payload)
  }

  patch(uri:any, payload:object,id:any):Observable<any>{
    return this.http.patch<any>(`${this.SERVER_URL}/${uri}/${id}`,payload)
  }

  delete(uri:any,id:any):Observable<any>{
    return this.http.delete<any>(`${this.SERVER_URL}/${uri}/${id}`)
  }
}
