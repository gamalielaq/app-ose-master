import { Injectable, EventEmitter } from '@angular/core';
import { User } from './../models/user-table';
import { ApiTable } from './../models/api-table';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User;
  saveUser$ = new EventEmitter<User>();
  url: string = '/api/Accounts/';

  constructor(
    private _http: HttpClient,
    private _apiService: ApiService
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
    return this._apiService.get<User>('/api/Accounts/');
  }

  create(user: User): Observable<User> {
    return this._apiService.post<any>(this.url, user);
  }

  update(user: User): Observable<User> {
    return this._apiService.put<any>(this.url, user);
  }

  delete(user: User): Observable<User> {
    return this._apiService.delete(`${this.url}${user.usuariO_ID}`);
  }

  process(user: User, type): Observable<User> {
    if(type === 'add') {
      return this._apiService.post<any>(this.url, user);
    }
  }
}