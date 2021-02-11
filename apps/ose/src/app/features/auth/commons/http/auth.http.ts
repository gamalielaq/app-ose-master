import { Injectable } from '@angular/core';
import { HttpModule } from './http.module';
import { HttpClient } from '@angular/common/http';
import { SignInCredentials } from '../../interfaces/sign-in-credentials.interface';
import { environment } from 'apps/ose/src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: HttpModule
})
export class AuthHttp {

token: string;

  constructor(private http: HttpClient) {
  }

  signIn(body: SignInCredentials): Observable<{ jwtToken: string }> {
    //return this.http.post<{ token: string }>(`${environment.api}/auth/sign-in`, body);
    return this.http.post<{ jwtToken: string }>(`${environment.api}/api/Accounts/authenticate`, body).pipe(
      map( resp => {
        console.log(resp);
        
        this.SaveJwtToken(resp.jwtToken);
        return resp;
      })
    );
  }

  signUp() {
    localStorage.removeItem('token');
  }

  private SaveJwtToken(idToken: string) {
    localStorage.setItem('token', idToken);
  }
}
