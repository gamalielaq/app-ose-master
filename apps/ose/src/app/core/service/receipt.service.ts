import { Injectable } from '@angular/core';
import { Months, Period, Year, Filter } from '../models/receipt';
import { Document } from '../models/document';
import { Observable } from 'rxjs';
import { environment } from 'apps/ose/src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReceiptService {

  constructor(
    private _http: HttpClient
  ) { }


  getDocumentsAll(): Observable<Document> {
    console.log('llamando al server');
    
    return this._http.get<Document>(`${environment.api}/api/tipo_documento/`).pipe(res => res);
  }

  getMonths(): Months[]  {
    return monthData;
  }

  getPeriod(): Period[]  {
    return period;
  }

  getYear(): Year[]  {
    return year;
  }

  getFilter(): Filter[]  {
    return filter;
  }
}


const monthData: Months[] = [
    {name: '1', code: 'Jan'},
    {name: '2', code: 'Feb'},
    {name: '3', code: 'Mar'},
    {name: '4', code: 'Apr'},
    {name: '5', code: 'May'},
    {name: '6', code: 'Jun'},
    {name: '7', code: 'Jul'},
    {name: '8', code: 'Aug'},
    {name: '9', code: 'Sep'},
    {name: '10', code: 'Oct'},
    {name: '11', code: 'Nov'},
    {name: '12', code: 'Dec'},
  ];
    
  const period = [
    { name: 'enero', code: 'from' },
    { name: 'diciemb', code: 'to' }
  ];
  const year = [
    { name: '2020', code: '2020' },
    { name: '2021', code: '2021' },
    { name: '2022', code: '2022' }
  ];

  const filter = [
    { name: 'Buscar por entidad', code: '02' },
    { name: 'Buscar documento por serie / numero', code: '03' },
    { name: 'Filtrar por estado de anulacion', code: '04' },
  ];