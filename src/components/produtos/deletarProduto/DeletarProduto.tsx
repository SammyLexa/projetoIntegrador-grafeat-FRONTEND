import React, { useEffect, useState } from 'react'
import { Typography, Button, Card, CardActions, CardContent } from '@material-ui/core'
import { Box } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { TokenState } from '../../../store/tokens/tokensReducer'
import Produto from '../../models/Produto'
import { buscaId, deleteId } from '../../services/Service'

function DeletarProduto() {
    const history = useNavigate()
    const { id } = useParams<{ id: string }>()
    const token = useSelector<TokenState, TokenState['token']>(
        (state) => state.token
    )

    const [produto, setProduto] = useState<Produto>()

    useEffect(() => {
        if (token === '') {
            alert('você precisa estar logado!')
            history('/login')
        }
    }, [token])

    useEffect(() => {
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

    function opcaoSim() {
        history('/produtos')
        deleteId(`/produtos/${id}`, {
            headers: {
                'Authorization': token
            }
        })
        alert('Produto deletado com sucesso!')
    }

    function opcaoNao() {
        history('/produtos')
    }
    return (
        <>
            <Box m={2}>
                <Card variant="outlined" >
                    <CardContent>
                        <Box justifyContent="center">
                            <Typography color="textSecondary" gutterBottom>
                                Deseja deletar o Produto:
                            </Typography>
                            <Typography color="textSecondary" >
                                {produto?.nome}
                                {console.log({produto})}
                            </Typography>
                        </Box>

                    </CardContent>
                    <CardActions>
                        <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
                            <Box mx={2}>
                                <Button onClick={opcaoSim} variant="contained" className="marginLeft" size='large' color="primary">
                                    Sim
                                </Button>
                            </Box>
                            <Box>
                                <Button onClick={opcaoNao} variant="contained" size='large' color="secondary">
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

export default DeletarProduto





