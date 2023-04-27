import { Box, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Categoria from '../../models/Categoria';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { busca } from '../../services/Service';
import './ListaCategoria.css'

function ListaCategorias() {
    const [categorias, setCategorias] = useState<Categoria[]>([])
    let navigate = useNavigate()
    const token = useSelector<TokenState, TokenState["token"]>(
        (state) => state.token
    );

    /*useEffect(() => {
        if (token == '') {
            alert("Você precisa estar logado")
            navigate('/login')
        }
    }, [token])*/

    async function getCategoria() {
        await busca("/categorias", setCategorias, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {
        getCategoria()
    }, [categorias.length])

    return (
        <>
            {
                categorias.map(categoria => (

                    <Box className='card_container'>
                        <h2 className='card_categoria'>Categoria</h2>
                        <Box>
                            <h1 className='card_titulo'>{categoria.nomeCategoria}</h1>
                            <p className='card_texto'>{categoria.descricaoCategoria}</p>
                        </Box>
                        <Box>
                            <Link to={`/formularioCategoria/${categoria.id}`}>
                                <Button className='botao'>
                                    Editar
                                </Button>
                            </Link>
                            <Link to={`/deletarCategoria/${categoria.id}`}>
                                <Button className='botao-deletar'>
                                    Deletar
                                </Button>
                            </Link>
                        </Box>
                    </Box>
                ))
            }
        </>
    )
}

export default ListaCategorias