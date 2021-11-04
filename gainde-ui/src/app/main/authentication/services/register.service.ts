import { Injectable } from '@angular/core';
import {UtilisateurDto} from '../../../common/dto/utilisateurDto';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8088/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
    private utilisateur: UtilisateurDto;
    constructor(private http: HttpClient) { }

    // tslint:disable-next-line:typedef
    register(user): Observable<any> {
        return this.http.post(AUTH_API + 'signup', {
          username: user.username,
          email: user.email,
          password: user.password
        }, httpOptions);
      }
}
