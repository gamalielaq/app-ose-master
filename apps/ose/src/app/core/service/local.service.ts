import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'apps/ose/src/environments/environment';
import { Observable } from 'rxjs';
import { LocalTable } from '../models/local-table';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: LocalTable;
  url = '/api/local/';
  constructor(
    private _http: HttpClient
  ) { }

  getLocalesAll(): Observable<LocalTable> {
    return this._http.get<LocalTable>(`${environment.api}${this.url}`).pipe(res => res);
  }

  process(user: LocalTable, type) {
    switch (type) {
      case 'add':
        return this._http.post(`${environment.api}${this.url}`, user).toPromise();
        break;
      case 'edit':
        return this._http.put(`${environment.api}${this.url}`, user).toPromise() 
        break;
      default:
        break;
    }
  }
  
  deleteLocal(id: string) {
    return this._http.delete(`${environment.api}${this.url}${id}`).toPromise();
  }

}
