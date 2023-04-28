interface VendedorLogin {
    id: number;
    nomeVendedor: string;
    usuario: string;
    senha: string;
    foto: string;
    localidade: string;
    dataDeNascimento: string;
    tipoDePagamento: string;
    token: string
}

export default VendedorLogin;