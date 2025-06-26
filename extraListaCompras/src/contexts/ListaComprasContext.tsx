import React, { useState, createContext, useContext } from 'react'
import { Unidade } from '../types/Unidades';
import { ItemLista } from '../types/ItemLista';
import { ListaCompras } from '../types/ListaCompras';

export const ListaComprasContext = createContext<ListaCompras | undefined>(undefined);

export default function ListaComprasProvider({children}: {children:React.ReactNode}) {
    
    const [lista, setLista] = useState<ItemLista[]>([]);
    const [idCont, setIdCont] = useState<number>(1);

    const adicionarItem = (item: Omit<ItemLista, 'id' | 'status'>) => {
        const novoItem: ItemLista = {
            id: idCont,
            nome: item.nome,
            quantidade: item.quantidade,
            unidade: item.unidade,
            status: false, 
            marca: item.marca,
            obs: item.obs,
            valor: item.valor,
        };
        setLista([...lista, novoItem]);
        setIdCont(idCont+1);
    }

    const alterarStatus = (id:number) => {
        setLista(liAtual=>
            liAtual.map(item =>
                item.id === id 
                ? {...item, status: !item.status}
                : item
            )
        );
    }
    
    return (
        <ListaComprasContext.Provider
            value={{
                lista,
                adicionarItem,
                alterarStatus,
            }}
        >
            {children}
        </ListaComprasContext.Provider>
    )
}