import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpHeaders } from '@angular/common/http';
import { AuthHttp } from './auth.http';

@Injectable()

export class AuthInterceptor implements HttpInterceptor {
  constructor(
    public authService: AuthHttp
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): any {

    const authToken = localStorage.getItem('token');
    console.log("paso el interceptor");

    const headers = new HttpHeaders({
        'Authorization': `Bearer ${authToken}`
    })

    const reqClone =  req.clone({
        headers
    })
    // const authReq = req.clone({
    //   setHeaders: {
    //     Authorization: `Bearer ${authToken}`
    //   },
    // });

    
    
    return next.handle(reqClone);
  }
}
