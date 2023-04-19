interface VendedorLogin {
    id: number;
    nomeVendedor: string;
    usuario: string;
    senha: string;
    foto: string;
    localidade: string;
    dataDeNascimento: string;
    tipoDePagamento: string;
    token?: string| null
}

export default VendedorLogin;