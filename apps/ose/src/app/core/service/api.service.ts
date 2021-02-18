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
    public _location: Location
  ) { }

 
}
