import { Grid, Container, Typography, TextField, FormControl, InputLabel, Select, MenuItem, FormHelperText, Button } from '@mui/material'
import { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Produto from '../../models/Produto';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { buscaId, put, post, busca } from '../../services/Service';
import Categoria from '../../models/Categoria';
import { toast } from 'react-toastify';

function CadastroProduto() {
    const navigate = useNavigate()
    const { id } = useParams<{ id: string }>()
    const [categorias, setCategorias] = useState<Categoria[]>([])
    const token = useSelector<TokenState, TokenState["token"]>(
        (state) => state.token
    )

    useEffect(() => {
        if (token == "") {
            toast.warn('Você precisa estar logado!', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
            navigate("/login")

        }
    }, [token])

    const [categoria, setCategoria] = useState<Categoria>({
        id: 0,
        nomeCategoria: '',
        descricaoCategoria: ''
    })

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

    useEffect(() => {
        setProduto({
            ...produto,
            categoria: categoria
        })
    }, [categoria])

    useEffect(() => {
        getCategorias();
        if (id !== undefined) {
            findById(id)
        }
    }, [id])

    async function getCategorias() {
        await busca("/categorias", setCategorias, {
            headers: {
                'Authorization': token
            }
        })
    }

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

        if (id !== undefined) {
            await put(`/produtos/${id}`, produto, setProduto, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Produto atualizado com sucesso!', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        } else {
            await post(`/produtos`, produto, setProduto, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Produto cadastrado com sucesso!', {
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
                        <InputLabel id="demo-simple-select-helper-label">Categoria</InputLabel>
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