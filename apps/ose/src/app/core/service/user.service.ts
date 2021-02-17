import { Injectable } from '@angular/core';
import { User } from './../models/user-table';
import { ApiTable } from './../models/api-table';
import { HttpClient } from '@angular/common/http';
import { environment } from 'apps/ose/src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User;
  constructor(
    private _http: HttpClient
  ) { }

  apiTables: ApiTable[] = [
    {
      local: 'LOCAL PRINCIPAL',
      description: 'PRINCIPAL',
      ruta: 'https://api.nubefact.com/api/v1/6753edc2-bc9c-411c-8c',
      token: '609eefb73ed242a88d51b757a0fc6e2b036abd5824874'
    }
  ];

  getUserAll(): Observable<User> {
    return this._http.get<User>(`${environment.api}/api/Accounts/`).pipe(res => res);
  }

  process(user: User, type) {
    switch (type) {
      case 'add':
        return this._http.post(`${environment.api}/api/Accounts/`, user).toPromise();
        break;
      case 'edit':
        return this._http.put(`${environment.api}/api/Accounts/`, user).toPromise() 
        break;
      default:
        break;
    }
  }
  
  deleteUser(id: string) {
    return this._http.delete(`${environment.api}/api/Accounts/${id}`).toPromise();
  }

}
