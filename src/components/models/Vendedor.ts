interface Vendedor {
    id?: number|null;
    nomeVendedor: string;
    usuario: string;
    senha: string;
    foto: string;
    localidade?: string|null;
    dataDeNascimento: string;
    tipoDePagamento: string;
    
}

export default Vendedor;