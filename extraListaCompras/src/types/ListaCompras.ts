import { ItemLista } from "./ItemLista";

export interface ListaCompras{
    
    lista: ItemLista[];
    
    adicionarItem: (item: Omit<ItemLista, 'id' | 'status'>) => void;
    
    alterarStatus: (id:number) => void;
}