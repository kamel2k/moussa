import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DeclarationDto } from '../declaration.dto';

const DECLARATION_ENDPOINT = 'http://localhost:8081/v1/';


@Injectable({
  providedIn: 'root'
})
export class DeclarationService {
  

  
  getByNumero(numero) {
    return this.http.get(DECLARATION_ENDPOINT + 'declarations/' + numero);
  }

  constructor(
    private http: HttpClient
  ) { }

  getAllDeclarations() {
    return this.http.get(DECLARATION_ENDPOINT + 'declarations');
  }

  add(declaration: DeclarationDto) {
      return this.http.post(DECLARATION_ENDPOINT + 'declarations', declaration);
  }

  controlManifeste(annee, bureau, numero) {
      return this.http.get(DECLARATION_ENDPOINT + 'declarations/manifeste',
      {
          params: {
            numero: numero,
            annee: annee,
            bureau: bureau
          }
      });
  }
}
