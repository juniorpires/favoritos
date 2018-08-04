import { Entity } from './entity';
export class Favorito extends Entity{
    
    public titulo:string
    public url:string
    public cor?:string
    public categoria_id?:number
}