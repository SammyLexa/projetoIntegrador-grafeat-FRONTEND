import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router'
import { TokenState } from '../../../../store/tokens/tokensReducer'
import { toast } from 'react-toastify'
import { buscaId } from '../../../services/Service'
import Produto from '../../../models/Produto'
import { Accordion, AccordionDetails, AccordionSummary, Box, Grid, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './ProdutoDetalhado.css'

function ProdutoDetalhado() {
    const history = useNavigate()
    const { id } = useParams<{ id: string }>()
    const [produto, setProduto] = useState<Produto>()

    const token = useSelector<TokenState, TokenState['token']>(
        (state) => state.token
    )

    useEffect(() => {
        if (token === '') {
            toast.warn('você precisa estar logado!', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
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
    return (
        <div className='container'>
            <Box className='container_conteudo'>
                <img className='produto_img' src={produto?.linkFoto} alt="" />
            </Box>
            <Box className='container_conteudo'>
                <h1 className='produto_nome'>{produto?.nome}</h1>
                <p className='produto_valor'>R$ {produto?.preco}</p>
                <div className='produto_tamanho'>
                    <h2 className='produto_tamanho-item'>Tamanhos</h2>
                    <p className='produto_tamanho-item'>{produto?.tamanho}</p>
                </div>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Descrição do Produto</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Informações: {produto?.descricao}
                        </Typography>
                        <Typography>
                            Material: {produto?.material}
                        </Typography>
                        <Typography>
                            Quantidade em estoque: {produto?.quantidade}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Sobre o Artista</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            {produto?.vendedor?.nomeVendedor}
                        </Typography>
                        <Typography>
                            {produto?.vendedor?.localidade}
                        </Typography>
                        <Typography>
                            <img className='vendedor_img' src={produto?.vendedor?.foto} alt="" />
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Box>

        </div>
    )
}

export default ProdutoDetalhado