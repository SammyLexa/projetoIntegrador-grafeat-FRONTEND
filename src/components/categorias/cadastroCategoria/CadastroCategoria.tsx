import { Grid, Container, Typography, TextField, Button } from '@mui/material'
import React, { ChangeEvent, useEffect, useState } from 'react'
import Categoria from '../../models/Categoria';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { buscaId, put, post } from '../../services/Service';

function CadastroCategoria() {
    let navigate = useNavigate();
    const token = useSelector<TokenState, TokenState["token"]>(
        (state) => state.token
    );
    const { id } = useParams<{ id: string }>();
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

    useEffect(() => {
        if (id !== undefined) {
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        buscaId(`/categorias/${id}`, setCategoria, {
            headers: {
                'Authorization': token
            }
        })
    }

    function updatedCategoria(e: ChangeEvent<HTMLInputElement>) {

        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value,
        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log("categoria" + JSON.stringify(categoria))

        if (id !== undefined) {
            console.log(categoria)
            await put(`/categorias/${id}`, categoria, setCategoria, {
                headers: {
                    'Authorization': token
                }
            })
            alert('Categoria atualizada com sucesso');
        } else {
            await post(`/categorias`, categoria, setCategoria, {
                headers: {
                    'Authorization': token
                }
            })
            alert('Categoria cadastrada com sucesso');
        }
        back()

    }

    function back() {
        navigate('/categorias')
    }

    return (
        <>
            <Grid marginTop={12} >
                <Container maxWidth="sm" className="topo">
                    <form onSubmit={onSubmit}>
                        <Typography variant="h3" color="textSecondary" component="h1" align="center" > Editar ou Cadastrar categoria</Typography>
                        <TextField value={categoria.nomeCategoria} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedCategoria(e)} id="nomeCategoria" label="Nome da Categoria" variant="outlined" name="nomeCategoria" margin="normal" fullWidth />
                        <TextField value={categoria.descricaoCategoria} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedCategoria(e)} id="descricaoCategoria" label="Descrição da Categoria" variant="outlined" name="descricaoCategoria" margin="normal" fullWidth />
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