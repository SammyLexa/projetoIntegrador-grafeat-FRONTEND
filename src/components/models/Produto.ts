import Categoria from "./Categoria";

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
}

export default Produto