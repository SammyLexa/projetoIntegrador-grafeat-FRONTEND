import { Grid, Container, Typography, TextField, Button } from '@mui/material'
import React, { ChangeEvent, useEffect, useState } from 'react'
import Categoria from '../../models/Categoria';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { buscaId, put, post } from '../../services/Service';
import { toast } from 'react-toastify';

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
    const [carregando, setCarregando] = useState(false)

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
            [e.target.name]: e.target.value
        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log("categoria" + JSON.stringify(categoria))

        if (id !== undefined) {
            setCarregando(true)
            await put(`/categorias`, categoria, setCategoria, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Categoria atualizada com sucesso!', {
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
            setCarregando(true)
            console.log(carregando)
            await post(`/categorias`, categoria, setCategoria, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Categoria cadastrada com sucesso!', {
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
        navigate('/categorias')
    }

    return (
        <>
            <Grid marginTop={12} >
                <Container maxWidth="sm" className="topo">
                    <form onSubmit={onSubmit}>
                        <Typography variant="h3" color="textSecondary" component="h1" align="center" > Editar ou Cadastrar categoria</Typography>
                        <TextField
                            error={categoria.nomeCategoria.length < 3 && categoria.nomeCategoria.length > 0}
                            helperText={categoria.nomeCategoria.length < 3 && categoria.nomeCategoria.length > 0 ? 'o campo nome precisa ser preenchido' : ''}
                            required value={categoria.nomeCategoria} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedCategoria(e)} id="nomeCategoria" label="Nome da Categoria" variant="outlined" name="nomeCategoria" margin="normal" fullWidth />
                        <TextField value={categoria.descricaoCategoria} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedCategoria(e)} id="descricaoCategoria" label="Descrição da Categoria" variant="outlined" name="descricaoCategoria" margin="normal" fullWidth />
                        <Button disabled={categoria.nomeCategoria.length < 3 || carregando} 
                            type="submit" variant="contained" className='botao'>
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
                    </form>
                </Container>
            </Grid>
        </>
    )

}

export default CadastroCategoria