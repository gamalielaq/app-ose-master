import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'apps/ose/src/environments/environment';
import { Observable } from 'rxjs';
import { Document } from '../models/document';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
    private _http: HttpClient
  ) { }

  getDocumentsAll(): Observable<Document> {
    return this._http.get<Document>(`${environment.api}/api/tipo_documento/`).pipe(res => res);
  }
    
  deleteDocumnt(id: string) {
    return this._http.delete(`${environment.api}/api/Accounts/${id}`).toPromise();
  }

}
