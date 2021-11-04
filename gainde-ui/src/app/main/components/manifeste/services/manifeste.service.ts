import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const MANIFESTES_ENDPOINT = 'http://localhost:8080/';


@Injectable({
  providedIn: 'root'
})
export class ManifesteService {
  
  
  enregistrer(manifeste: any) {
    return this.http.patch(MANIFESTES_ENDPOINT + 'manifestes/'+ manifeste.id, manifeste);
  }
  
  getById(id) {
    return this.http.get(MANIFESTES_ENDPOINT + 'manifestes/' + id);
  }

  constructor(
    private http: HttpClient
  ) { }

  getBrouillonManifestes() {
    return this.http.get(MANIFESTES_ENDPOINT + 'brouillon-manifestes');
  }

  getBrouillonManifestesByDate(debut, fin) {
    return this.http.get(MANIFESTES_ENDPOINT + 'filter-brouillon-manifestes', {
      params: {  
          'debut': debut,
          'fin': fin
      }
    });
  }

}
