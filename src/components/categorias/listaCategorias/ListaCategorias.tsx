import { Box, Button, IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Categoria from '../../models/Categoria';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { busca } from '../../services/Service';
import './ListaCategoria.css'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { toast } from 'react-toastify';

function ListaCategorias() {
    const [categorias, setCategorias] = useState<Categoria[]>([])
    let navigate = useNavigate()
    const token = useSelector<TokenState, TokenState["token"]>(
        (state) => state.token
    );

    useEffect(() => {
        if (token == '') {
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
            navigate('/login')
        }
    }, [token])

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
        <div className='page_categoria'>
            <Box className='banner'>
                <div className='banner_img'>
                    <h1 className='banner_titulo'>Categorias</h1>
                </div>
            </Box>
            <Box className='cards'>
                {
                    categorias.map(categoria => (

                        <Box className='card_container'>
                            <h3 className='card_categoria'>Categoria</h3>
                            <Box>
                                <h2 className='card_titulo'>{categoria.nomeCategoria}</h2>
                                <p className='card_texto'>{categoria.descricaoCategoria}</p>
                            </Box>
                            <Box>
                                <Link to={`/formularioCategoria/${categoria.id}`}>
                                <IconButton aria-label="delete">
                                        <EditIcon />
                                    </IconButton>
                                </Link>
                                <Link to={`/deletarCategoria/${categoria.id}`}>
                                    <IconButton aria-label="delete">
                                        <DeleteIcon />
                                    </IconButton>
                                </Link>
                            </Box>
                        </Box>

                    ))
                }
            </Box>
        </div>
    )
}

export default ListaCategorias