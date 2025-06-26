import { useContext } from "react"
import { ListaComprasContext } from "../contexts/ListaComprasContext"


export const useListaCompras = () => {
    const context = useContext(ListaComprasContext);

    if(!context){
        throw new Error('useListaCompras deve ser usado dentro de ListaComprasProvides');
    }

    return context;
}