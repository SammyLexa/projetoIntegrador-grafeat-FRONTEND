
import { TextField } from '@material-ui/core';
import { Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import React from 'react';
import './Cadastrar.css'

function Cadastrar(){
    return(
    <>
    <Grid container alignItems={'center'}>
        <Grid item xs={6} justifyContent='center'> 
            <Box display='flex' justifyContent={'center'}>
                <Grid item xs={6}>
                    <form>
                        <Typography
                        variant='h4' align='center' gutterBottom fontWeight='bold'
                        >
                        Cadastre-se
                        </Typography>
                        <TextField variant='outlined' label='Nome' margin='normal' id='nomeVendedor' fullWidth />
                        <TextField variant='outlined' label='Email' margin='normal' id='usuario' fullWidth />
                        <TextField variant='outlined' label='Senha' margin='normal' id='senha' type='password' fullWidth />
                        <TextField variant='outlined' label='Link da foto' margin='normal' id='foto' fullWidth />
                        <TextField variant='outlined' label='Data de nascimento' margin='normal' id='dataDeNascimento' fullWidth  />
                        <TextField variant='outlined' label='Localidade' margin='normal' id='localidade' fullWidth  />
                        <TextField variant='outlined' label='Tipo de pagamento' margin='normal' id='tipoDePagamento' fullWidth  />
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

export default Cadastrar