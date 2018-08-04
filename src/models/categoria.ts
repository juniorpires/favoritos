import { Favorito } from './favorito';
import { Entity } from './entity';
export class Categoria extends Entity{

    public nome:string;
    public favoritos?: Favorito[];
}