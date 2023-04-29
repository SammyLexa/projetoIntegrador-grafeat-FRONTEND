import React, { ComponentProps, ChangeEvent, useEffect, useState } from "react";
import { Grid, Typography, Button, Select, MenuItem } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import './CadastrarUsuario.css'
import VendedorLogin from "../../../components/models/VendedorLogin";
import { cadastroVendedor, login } from "../../../components/services/Service"
import Vendedor from "../../../components/models/Vendedor";
import './CadastrarUsuario.css';
import { toast } from 'react-toastify';
import TextField from "@material-ui/core/TextField";
import InputMask from 'react-input-mask';


function CadastrarVendedor() {
    const navigate = useNavigate()
    const [confirmarSenha, setConfirmarSenha] = useState<String>("")
    const [vendedor, setVendedor] = useState<Vendedor>(
        {
            id: 0,
            nomeVendedor: "",
            usuario: "",
            senha: "",
            foto: "",
            localidade: "",
            dataDeNascimento: "",
            tipoDePagamento: "",
        })

    const [vendedorResult, setVendedorResult] = useState<Vendedor>(
        {
            id: 0,
            nomeVendedor: "",
            usuario: "",
            senha: "",
            foto: "",
            localidade: "",
            dataDeNascimento: "",
            tipoDePagamento: ""
        })

    const [carregando, setCarregando] = useState(false)

    const options = [
        { value: 'pix', label: 'Pix' },
        { value: 'depositoBancario', label: 'DOC/TED' },
        { value: 'cheque', label: 'Cheque' },
    ];

    const renderOptions = () => {
        return options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
                {option.label}
            </MenuItem>
        ));
    };


    useEffect(() => {
        if (vendedorResult.id != 0) {
            navigate("/login")
        } console.log(vendedorResult)
    }, [vendedorResult])


    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value)
    }

    function formatarData(data: any) {
        var partes = data.split('/');
        var novaData = partes[2] + '-' + partes[1] + '-' + partes[0];
        return novaData;
      }


    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setVendedor({
            ...vendedor,
            [e.target.name]: e.target.value
        })

    }
    async function onSubmit(event: ChangeEvent<HTMLFormElement>) {
        event.preventDefault()
         var novaData = formatarData(vendedor.dataDeNascimento);
         vendedor.dataDeNascimento = novaData;
        if (confirmarSenha === vendedor.senha) {
            try {
                setCarregando(true)
                await cadastroVendedor('/vendedor/cadastrar', vendedor, setVendedorResult)
                toast.success('Usuário cadastrado com sucesso!', {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            } catch (error) {
                setCarregando(false)
                console.log({ vendedor })
                toast.warn('Por favor, verifique os campos', {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                console.log(error)
            }
        } else {
            toast.warn('Verifique se as senhas estão iguais', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
    }

    return (
        <>
            <Grid container alignItems={'center'}>
                <Grid item xs={6} justifyContent='center'>
                    <Box display='flex' justifyContent={'center'}>
                        <Grid item xs={6}>
                            <form onSubmit={onSubmit}>
                                <Typography variant='h4' align='center' gutterBottom fontWeight='bold' className='tituloCadastrar'>
                                    Cadastre-se
                                </Typography>
                                <TextField
                                    error={vendedor.nomeVendedor.length < 4 && vendedor.nomeVendedor.length > 0}
                                    helperText={vendedor.nomeVendedor.length < 4 && vendedor.nomeVendedor.length > 0 ? 'o campo nome precisa ser preenchido' : ''}
                                    required name='nomeVendedor' value={vendedor.nomeVendedor} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} variant='outlined' label='Nome' margin='normal' id='nomeVendedor' fullWidth className='textfield' />

                                <TextField
                                    error={vendedor.usuario.length < 7 && vendedor.usuario.length > 0}
                                    helperText={vendedor.usuario.length < 7 && vendedor.usuario.length > 0 ? 'o campo usuario precisa ser preenchido' : ''}
                                    name="usuario" value={vendedor.usuario} required type="email" onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} variant='outlined' label='Email' margin='normal' id='usuario' fullWidth className='textfield' />

                                <TextField
                                    error={vendedor.senha.length < 8 && vendedor.senha.length > 0}
                                    helperText={vendedor.senha.length < 8 && vendedor.senha.length > 0 ? 'o campo senha precisa ser preenchido' : ''}
                                    name='senha' value={vendedor.senha} required onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} variant='outlined' label='Senha' margin='normal' id='senha' type='password' fullWidth className='textfield' />

                                <Typography className='avisoValidacao'>*A senha deve conter pelo menos 8 caracteres</Typography>
                                <TextField
                                    error={confirmarSenha.length < 8 && confirmarSenha.length > 0}
                                    helperText={confirmarSenha.length < 8 && confirmarSenha.length > 0 ? 'o campo confirmar senha precisa ser preenchido' : ''}
                                    name='confirmarSenha' value={confirmarSenha} required onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} variant='outlined' label='Confirmar senha' margin='normal' id='confirmarSenha' type='password' fullWidth className='textfield' />

                                <TextField
                                    error={vendedor.foto.length < 10 && vendedor.foto.length > 0}
                                    helperText={vendedor.foto.length < 10 && vendedor.foto.length > 0 ? 'o campo foto precisa ser preenchido' : ''}
                                    name='foto' value={vendedor.foto} required onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} variant='outlined' label='URL da foto' margin='normal' id='foto' fullWidth className='textfield' />

                                <Typography className='avisoValidacao'>*O link deve conter pelo menos 10 caracteres</Typography>
                                <TextField
                                    error={vendedor.dataDeNascimento.length < 8 && vendedor.dataDeNascimento.length > 0}
                                    helperText={vendedor.dataDeNascimento.length < 8 && vendedor.dataDeNascimento.length > 0 ? 'o campo data de nascimento precisa ser preenchido' : ''}
                                    name='dataDeNascimento'
                                    value={vendedor.dataDeNascimento}
                                    required
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                                    variant='outlined'
                                    label='Data de nascimento'
                                    margin='normal'
                                    id='dataDeNascimento'
                                    fullWidth
                                    className='textfield'
                                    InputProps={{
                                        inputComponent: InputMask as any,
                                        inputProps: { mask: '99/99/9999' }
                                    }}
                                />

                                <TextField
                                    error={vendedor.localidade.length < 5 && vendedor.localidade.length > 0}
                                    helperText={vendedor.localidade.length < 5 && vendedor.localidade.length > 0 ? 'o campo localidade precisa ser preenchido' : ''}
                                    name='localidade' value={vendedor.localidade} required onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} variant='outlined' label='Localidade' margin='normal' id='localidade' fullWidth className='textfield' />

                                <TextField
                                    select
                                    error={vendedor.tipoDePagamento.length < 3 && vendedor.tipoDePagamento.length > 0}
                                    helperText={
                                        vendedor.tipoDePagamento.length < 3 && vendedor.tipoDePagamento.length > 0
                                            ? 'o campo pagamento precisa ser preenchido'
                                            : ''
                                    }
                                    name='tipoDePagamento'
                                    value={vendedor.tipoDePagamento}
                                    required
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                                    variant='outlined'
                                    label='Tipo de pagamento'
                                    margin='normal'
                                    id='tipoDePagamento'
                                    fullWidth
                                    className='textfield'
                                    SelectProps={{ displayEmpty: true }}
                                >
                                    <MenuItem value='' disabled>
                                    </MenuItem>
                                    {renderOptions()}
                                </TextField>

                                <Box marginTop={2} textAlign='center'>
                                    <Button
                                        disabled={(
                                            vendedor.nomeVendedor.length < 4 ||
                                            vendedor.usuario.length < 7 ||
                                            vendedor.senha.length < 8 ||
                                            confirmarSenha.length < 8 ||
                                            vendedor.foto.length < 10 ||
                                            vendedor.dataDeNascimento.length < 8 ||
                                            vendedor.localidade.length < 5 ||
                                            vendedor.tipoDePagamento.length < 3)
                                            ||
                                            (carregando)}
                                        type='submit' variant='contained' color='primary' className='btnCadastrar'>
                                        {carregando ? (
                                            <section className="dots-container">
                                                <div className="dot"></div>
                                                <div className="dot"></div>
                                                <div className="dot"></div>
                                                <div className="dot"></div>
                                                <div className="dot"></div>
                                            </section>
                                        ) : ('Cadastrar')}
                                    </Button>
                                </Box>
                            </form>
                            <Typography marginTop={2} align='center' variant='body1' className='cta'>Já tem uma conta? Faça <Link to='/login' className='linkCadastrar'>Login </Link> </Typography>
                        </Grid>

                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <img src="https://ik.imagekit.io/wall90gifs/Grafeat/Making_art-pana.png?updatedAt=1681498159239" alt="Imagem da tela de cadastro" className='fotoCadastrarUsuario' />
                </Grid>
            </Grid>

        </>
    )
}


export default CadastrarVendedor