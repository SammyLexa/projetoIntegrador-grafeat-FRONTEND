import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { TokenState } from '../../../store/tokens/tokensReducer'
import Categoria from '../../models/Categoria'
import { buscaId, deleteId } from '../../services/Service'

function DeletarCategoria() {
    const history = useNavigate()
    const { id } = useParams<{ id: string }>()
    const token = useSelector<TokenState, TokenState['token']>(
        (state) => state.token
    )

    const [categoria, setCategoria] = useState<Categoria>()

    useEffect(() => {
        if (token === '') {
            alert('Você precisa estar logado!')
            history('/login')
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        buscaId(`/categoria/${id}`, setCategoria, {
            headers: {
                'Authorization': token
            }
        })
    }

    function DeletarCategoria() {
        history('/categorias')
        deleteId(`/categorias/${id}`, {
            headers: {
                'Authorization': token
            }
        })
        alert('Categoria deletada com sucesso!')
    }

    function nao() {
        history('/categorias')
    }

    return (
        <>
            <Box m={2}>
                <Card variant="outlined">
                    <CardContent>
                        <Box justifyContent="center">
                            <Typography color="textSecondary" gutterBottom>
                                Deseja deletar a Categoria?:
                            </Typography>
                            <Typography color="textSecondary">
                                {categoria?.descricaoCategoria}
                            </Typography>
                        </Box>
                    </CardContent>
                    <CardActions>
                        <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
                            <Box mx={2}>
                                <Button onClick={DeletarCategoria} variant="contained" className="marginLeft" size='large' color="primary">
                                    Sim
                                </Button>
                            </Box>
                            <Box mx={2}>
                                <Button onClick={nao} variant="contained" size='large' color="secondary">
                                    Não
                                </Button>
                            </Box>
                        </Box>
                    </CardActions>
                </Card>
            </Box>
        </>
    )
}

export default DeletarCategoria

