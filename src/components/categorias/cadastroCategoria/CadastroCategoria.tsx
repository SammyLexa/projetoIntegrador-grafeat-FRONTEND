import { Grid, Container, Typography, TextField, Button } from '@mui/material'
import React from 'react'

function CadastroCategoria() {
    return (
        <>
            <Grid marginTop={12} >
                <Container maxWidth="sm" className="topo">
                    <form >
                        <Typography variant="h3" color="textSecondary" component="h1" align="center" > Editar ou Cadastrar categoria</Typography>
                        <TextField id="nomeCategoria" label="Nome da Categoria" variant="outlined" name="nomeCategoria" margin="normal" fullWidth />
                        <TextField id="descricaoCategoria" label="Descrição da Categoria" variant="outlined" name="descricaoCategoria" margin="normal" fullWidth />
                        <Button type="submit" variant="contained" className='botao'>
                            Finalizar
                        </Button>
                    </form>
                </Container>
            </Grid>
        </>
    )
}

export default CadastroCategoria