import { Injectable, NgModule } from '@angular/core';
import { Categoria } from '../models/categoria';
import { Favorito } from '../models/favorito';
import { Observable,of } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';
import { Entity } from '../models/entity';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(public db: AngularFirestore) { }

  getCategorias(): Observable<Categoria[]>{

    let listAllCategorias = Entity.getAll(this.db, "categoria");
    let categoriasList : Categoria[]=[];

    listAllCategorias.subscribe(
      categorias => { 
                  categorias.forEach(categoria => {
                          Entity.getAllFilter(this.db,"favorito","categoria_id",(<Categoria>categoria).id).subscribe(
                                favoritos => {
                                  let c = new Categoria(this.db)
                                  c.nome = categoria.nome
                                  c.favoritos = favoritos

                                  categoriasList.push(c);
                                }
                   );
                 });

        
      }
    );
    
    return of(categoriasList);
  }

  save(categoria:Categoria){
    categoria.add();
    //CATEGORIAS.push(categoria);
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
    Categoria.getAll(this.db).subscribe( (elements =>{
      elements.map(element => {
        favoritos = favoritos.concat(element.favoritos);
      });
      
    }));
    // CATEGORIAS.forEach(element => {
    //   favoritos = favoritos.concat(element.favoritos);
    // });

    return favoritos;
  }
}
