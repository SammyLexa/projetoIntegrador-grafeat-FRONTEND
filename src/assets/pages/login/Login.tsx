import React from 'react'
import './Login.css'
import { Button, Grid, TextField, Typography } from '@material-ui/core'
import { Box } from '@mui/material'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <>
            <Grid container direction='row' justifyContent='center' alignItems='center'>
                {/* Foto */}
                <Grid xs={5} style={{
                    backgroundImage: `url(https://ik.imagekit.io/wall90gifs/BlogPessoal/adorable-kitty-with-monochrome-wall-her.jpg?updatedAt=1681438971679)`,
                    backgroundRepeat: 'no-repeat', width: '100vh', minHeight: '100vh', backgroundSize: 'cover', backgroundPosition: 'center',
                }}>
                </Grid>

                {/* Formulario */}
                <Grid xs={7} alignItems='center'>
                    <Box paddingX={6}>
                        <form>
                            <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' style={{ fontWeight: 'bold' }}>Entrar</Typography>
                            <TextField id='usuario' label='usuário' variant='outlined' name='usuario' margin='normal' fullWidth></TextField>
                            <TextField id='senha' label='senha' variant='outlined' name='senha' margin='normal' fullWidth type='password'></TextField>
                            <Box marginTop={2} textAlign='center'>
                                {/* <Link to='/home'> */}
                                <Button type='submit' variant='contained' color='primary'>
                                    Logar
                                </Button>
                                {/* </Link> */}
                            </Box>
                        </form>

                        <Box display='flex' justifyContent='center' marginTop={2}>
                            <Box marginRight={0.5}>
                                <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta? </Typography>
                            </Box>
                            {/* <Link to='/cadastrar'> */}
                                <Typography variant='subtitle1' align='center' style={{ fontWeight: 'bold' }}>Cadastre-se</Typography>
                            {/* </Link> */}
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Login