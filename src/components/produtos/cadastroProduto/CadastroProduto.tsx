import { Grid, Container, Typography, TextField, FormControl, InputLabel, Select, MenuItem, FormHelperText, Button } from '@mui/material'
import { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Produto from '../../models/Produto';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { buscaId, put, post, busca } from '../../services/Service';
import Categoria from '../../models/Categoria';

function CadastroProduto() {
    let navigate = useNavigate();
    const token = useSelector<TokenState, TokenState["token"]>(
        (state) => state.token
    );
    const { id } = useParams<{ id: string }>();
    const [produto, setProduto] = useState<Produto>({
        id: 0,
        nome: '',
        descricao: '',
        preco: 0,
        material: '',
        tamanho: '',
        quantidade: 0,
        linkFoto: '',
        categoria: null
    })

    const [categorias, setCategorias] = useState<Categoria[]>([])

    const [categoria, setCategoria] = useState<Categoria>({
        id: 0,
        nomeCategoria: '',
        descricaoCategoria: '',
    })

    useEffect(() => {
        if (token == "") {
            alert("Você precisa estar logado")
            navigate("/login")

        }
    }, [token])
    
    async function getCategorias() {
        await busca("/categorias", setCategorias, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {
        getCategorias();
        if (id !== undefined) {
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        buscaId(`/produtos/${id}`, setProduto, {
            headers: {
                'Authorization': token
            }
        })
    }

    function updatedProduto(e: ChangeEvent<HTMLInputElement>) {

        setProduto({
            ...produto,
            [e.target.name]: e.target.value,
            categoria: categoria
        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log("produtos" + JSON.stringify(produto))

        if (id !== undefined) {
            console.log(produto)
           await put(`/produtos`, produto, setProduto, {
                headers: {
                    'Authorization': token
                }
            })
            alert('Produto atualizado com sucesso');
        } else {
           await post(`/produtos`, produto, setProduto, {
                headers: {
                    'Authorization': token
                }
            })
            alert('Produto cadastrado com sucesso');
        }
        back()
    
        }
    
        function back() {
            navigate('/produtos')
        }
  
    return (
        <Grid marginTop={12} >
            <Container maxWidth="sm" >
            
                <form onSubmit={onSubmit} >
                    <Typography variant="h3" color="textSecondary" component="h1" align="center" >Cadastrar ou Atualizar Produto</Typography>
                    <TextField value={produto.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="nome" label="nome" variant="outlined" name="nome" margin="normal" fullWidth />
                    <TextField value={produto.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="descricao" label="descricao" name="descricao" variant="outlined" margin="normal" fullWidth />
                    <TextField value={produto.preco} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="preco" label="preço" name="preco" variant="outlined" margin="normal" fullWidth />
                    <TextField value={produto.material} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="material" label="Material" name="material" variant="outlined" margin="normal" fullWidth />
                    <TextField value={produto.tamanho} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="tamanho" label="Tamanho" name="tamanho" variant="outlined" margin="normal" fullWidth />
                    <TextField value={produto.quantidade} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="quantidade" label="Quantidade" name="quantidade" variant="outlined" margin="normal" fullWidth />
                    <TextField value={produto.linkFoto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="linkFoto" label="Link da Foto" name="linkFoto" variant="outlined" margin="normal" fullWidth />

                    <FormControl >
                        <InputLabel id="demo-simple-select-helper-label">Categoria </InputLabel>
                        <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            onChange={(event) => buscaId(`/categorias/${event.target.value}`, setCategoria, {
                                headers: {
                                    'Authorization': token
                                }
                            })} >
                            {
                                categorias.map((categoria) => (
                                    <MenuItem value={categoria.id}>{categoria.nomeCategoria}</MenuItem>
                                ))
                            }
                        </Select>
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