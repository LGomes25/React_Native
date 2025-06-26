import { Unidade } from "./Unidades";

export interface ItemLista{
    
    readonly id : number;
    nome : string;
    quantidade:number;
	unidade:Unidade;
    status:boolean;
	marca?:string;
	obs?:string;
	valor?:number;
}