import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../models/categoria';
import { CategoriaService } from '../categoria.service';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-categoria-create',
  templateUrl: './categoria-create.component.html',
  styleUrls: ['./categoria-create.component.css']
})
export class CategoriaCreateComponent implements OnInit {

  constructor(private categoriaService: CategoriaService, public db: AngularFirestore) { }

  categoria: Categoria = new Categoria(this.db)

  ngOnInit() {
  }


  save():void{
      this.categoriaService.save(this.categoria);
      this.categoria = new Categoria(this.db)
  }
}
