import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  getRole(): string {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }

  private API_USERS = 'http://localhost:3000/login';

  postUsers(usuario: any): Observable<any> {
    return this.http.post(this.API_USERS, usuario);
  }
}
