import { Component, OnInit } from '@angular/core';
import { Favorito } from '../../models/favorito';
import { Categoria } from '../../models/categoria';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-favorito-create',
  templateUrl: './favorito-create.component.html',
  styleUrls: ['./favorito-create.component.css']
})
export class FavoritoCreateComponent implements OnInit {

  constructor(private categoriaService: CategoriaService) { }

  favorito: Favorito;
  categorias: Categoria[];


  ngOnInit() {
    /*this.favorito = {id:1,titulo:"",url:""};
    this.categoriaService.getCategorias().
                subscribe(categorias => this.categorias = categorias);*/
  }
  
  save(): void{
    //this.categoriaService.saveFavorito(this.favorito);
    //this.favorito = {id:1,titulo:"",url:""};
  }

}
