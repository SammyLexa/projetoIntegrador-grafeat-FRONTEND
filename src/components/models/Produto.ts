import Categoria from "./Categoria";
import Vendedor from "./Vendedor";

interface Produto {
    id: number,
    nome: string,
    descricao: string,
    preco: number,
    material: string,
    tamanho: string,
    quantidade: number,
    linkFoto: string,
    categoria?: Categoria | null
    vendedor?: Vendedor | null
}

export default Produto