import { Injectable } from '@angular/core';
import { UtilisateurDto } from '../../../common/dto/utilisateurDto';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8088/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})


export class LoginService {

      
  utilisateurs: UtilisateurDto[];
  utilisateur: UtilisateurDto;
  
  constructor(private http: HttpClient) { }

  login(credentials): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username: credentials.controls.userName.value,
      password: credentials.controls.password.value
    }, httpOptions);
  }

}
