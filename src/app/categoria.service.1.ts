import { Injectable } from '@angular/core';
import { Categoria } from '../models/categoria';
import { CATEGORIAS } from '../mocks/mock-categorias';
import { Favorito } from '../models/favorito';
import { Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor() { }

  getCategorias(): Observable<Categoria[]>{
    return of(CATEGORIAS);
  }

  save(categoria:Categoria){
    CATEGORIAS.push(categoria);
  }

  /*saveFavorito(favorito: Favorito){
      CATEGORIAS.forEach(element => {
          if(element.id==favorito.categoria_id){
            element.favoritos.push(favorito);
          }        
      });
  }*/



  getFavoritos(): Favorito[]{
    let favoritos: Favorito[]= [] ;

    CATEGORIAS.forEach(element => {
      favoritos = favoritos.concat(element.favoritos);
    });

    return favoritos;
  }
}
