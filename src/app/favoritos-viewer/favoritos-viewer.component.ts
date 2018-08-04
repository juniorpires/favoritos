import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../categoria.service';
import { Categoria } from '../../models/categoria';
import { Favorito } from '../../models/favorito';

@Component({
  selector: 'app-favoritos-viewer',
  templateUrl: './favoritos-viewer.component.html',
  styleUrls: ['./favoritos-viewer.component.css']
})
export class FavoritosViewerComponent implements OnInit {

  constructor(private categoriaService: CategoriaService) { }

  categorias: Categoria[];

  ngOnInit() {
   
    this.getCategorias();
  }

  getCategorias(): void{
    this.categoriaService.getCategorias()
        .subscribe(categorias => this.categorias = categorias);
  }

}
