import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private signUpUrl = 'http://localhost:8081/api/users/signup';
  private loginUrl = 'http://localhost:8081/api/users/login';

  constructor(private http: HttpClient) { }

  signUp(userData: any): Observable<any> {
    return this.http.post(this.signUpUrl, userData, { responseType: 'json' });
  }

  login(credentials: any): Observable<any> {
    return this.http.post(this.loginUrl, credentials, { responseType: 'json' });
  }
}
