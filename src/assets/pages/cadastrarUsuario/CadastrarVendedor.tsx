
import React, { ChangeEvent, useEffect, useState } from "react";
import { TextField, Grid, Typography, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import './CadastrarUsuario.css'
import useLocalStorage from "react-use-localstorage";
import VendedorLogin from "../../../components/models/VendedorLogin";
import {cadastroVendedor, login} from "../../../components/services/Service"
import Vendedor from "../../../components/models/Vendedor";




function CadastrarVendedor(){
    let navigate = useNavigate();
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

    useEffect(() => {
        if (vendedorResult.id != 0) {
            navigate("/login")
        } console.log(vendedorResult)
    }, [vendedorResult])


    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value)
    }


    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setVendedor({
            ...vendedor,
            [e.target.name]: e.target.value
        })

    }
    async function onSubmit(event: ChangeEvent<HTMLFormElement>) {
        event.preventDefault()
        if (confirmarSenha === vendedor.senha) {
            try {
                await cadastroVendedor('/vendedor/cadastrar', vendedor, setVendedorResult)
                alert('Usuário cadastrado com sucesso')
            } catch (error) {
                alert('Por favor, verifique os campos')
                console.log(error)
            }
        } else {
            alert('Dados inconsistentes. Favor verificar as informações de cadastro.')
        }
    }

    return(
    <>
    <Grid container alignItems={'center'}>
        <Grid item xs={6} justifyContent='center'> 
            <Box display='flex' justifyContent={'center'}>
                <Grid item xs={6}>
                    <form onSubmit={onSubmit}>
                        <Typography
                        variant='h4' align='center' gutterBottom fontWeight='bold'
                        >
                        Cadastre-se
                        </Typography>
                        <TextField required name='nomeVendedor' value={vendedor.nomeVendedor} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} variant='outlined' label='Nome' margin='normal' id='nomeVendedor' fullWidth />
                        <TextField name="usuario"  value={vendedor.usuario} required type="email" onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} variant='outlined' label='Email' margin='normal' id='usuario' fullWidth />
                        <TextField name='senha' value={vendedor.senha} required onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} variant='outlined' label='Senha' margin='normal' id='senha' type='password' fullWidth />
                        <Typography >*Deve conter pelo menos 8 caracteres</Typography>
                        <TextField name='confirmarSenha' value={confirmarSenha} required onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} variant='outlined' label='confirmar senha' margin='normal' id='confirmarSenha' type='password' fullWidth />
                        <TextField name='foto' value={vendedor.foto} required onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} variant='outlined' label='Link da foto' margin='normal' id='foto' fullWidth />
                        <Typography >*O link deve conter pelo menos 10 caracteres</Typography>
                        <TextField name='dataDeNascimento' value={vendedor.dataDeNascimento} required onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} variant='outlined' label='Data de nascimento' margin='normal' id='dataDeNascimento' fullWidth  />
                        <TextField name='localidade' value={vendedor.localidade} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} variant='outlined' label='Localidade' margin='normal' id='localidade' fullWidth  />
                        <TextField name='tipoDePagamento' value={vendedor.tipoDePagamento} required onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} variant='outlined' label='Tipo de pagamento' margin='normal' id='tipoDePagamento' fullWidth  />
                        <Box marginTop={2} textAlign='center'>
                                <Button type='submit' variant='contained' color='primary'>
                                    cadastrar
                                </Button>
                            </Box>
                    </form>
                    <Typography marginTop={2} align='center' variant='body1' >Já tem uma conta? Faça <Link to='/login' className='linkCadastrar'>Login </Link> </Typography>
                </Grid>
                
            </Box>
        </Grid>
        <Grid item xs={6}>
        <img src="https://ik.imagekit.io/wall90gifs/Grafeat/Making_art-pana.png?updatedAt=1681498159239" alt="Imagem da tela de cadastro" className='fotoCadastrar' />
            </Grid> 
    </Grid> 
    
    </>
    )
}

export default CadastrarVendedor