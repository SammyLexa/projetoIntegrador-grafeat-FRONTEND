import Produto from "./Produto";

interface Vendedor {
    id?: number|null;
    nomeVendedor: string;
    usuario: string;
    senha: string;
    foto: string;
    localidade: string;
    dataDeNascimento: string;
    tipoDePagamento: string;
    produto?: Produto[]
}

export default Vendedor;