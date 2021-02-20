import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'apps/ose/src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(
    public _http: HttpClient
  ) { }


  get<TResponse>(url: string, headers?: any, params?: any): Observable<TResponse> {
    const httpOptions = {
      headers: new HttpHeaders(headers),
      params
    };
    return this._http.get<TResponse>(`${environment.api}${url}`, httpOptions);
  }

  post<TResponse>(url: string, data: any, headers?: any): Observable<TResponse> {
    const httpOptions = {
      headers: new HttpHeaders(headers),
    };
    return this._http.post<TResponse>(`${environment.api}${url}`, data, httpOptions);
  }

  put<TResponse>(url: string, data: any, headers?: any): Observable<TResponse> {
    const httpOptions = {
      headers: new HttpHeaders(headers),
    };
    return this._http.put<TResponse>(`${environment.api}${url}`, data, httpOptions);
  }

  
  delete<TResponse>(url: string, headers?: any): Observable<TResponse> {
    const httpOptions = {
      headers: new HttpHeaders(headers),
    };
    return this._http.delete<TResponse>(`${environment.api}${url}`, httpOptions)   
  }
}
