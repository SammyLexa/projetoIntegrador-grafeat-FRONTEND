import { Grid, Container, Typography, TextField, FormControl, InputLabel, Select, MenuItem, FormHelperText, Button } from '@mui/material'
import React from 'react'

function CadastroProduto() {
    return (
        <Grid marginTop={12} >
            <Container maxWidth="sm" >

                <form>
                    <Typography variant="h3" color="textSecondary" component="h1" align="center" >Cadastrar ou Atualizar Produto</Typography>
                    <TextField  id="nome" label="nome" variant="outlined" name="nome" margin="normal" fullWidth />
                    <TextField id="descricao" label="descricao" name="descricao" variant="outlined" margin="normal" fullWidth />
                    <TextField id="preco" label="preço" name="preco" variant="outlined" margin="normal" fullWidth />
                    <TextField id="material" label="Material" name="meterial" variant="outlined" margin="normal" fullWidth />
                    <TextField id="tamanho" label="Tamanho" name="tamanho" variant="outlined" margin="normal" fullWidth />
                    <TextField id="quantidade" label="Quantidade" name="quantidade" variant="outlined" margin="normal" fullWidth />
                    <TextField id="linkFoto" label="Link da Foto" name="linkFoto" variant="outlined" margin="normal" fullWidth />

                    <FormControl >
                        <InputLabel id="demo-simple-select-helper-label">Categoria </InputLabel>
                        
                        <FormHelperText>Escolha uma categoria para o produto</FormHelperText>
                        <Button type="submit" variant="contained" >
                            Finalizar
                        </Button>
                    </FormControl>
                </form>
            </Container>
        </Grid>
    )
}

export default CadastroProduto