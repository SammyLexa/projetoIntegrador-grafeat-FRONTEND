import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { TokenState } from '../../store/tokens/tokensReducer'
import Vendedor from '../models/Vendedor'
import { buscaId } from '../services/Service'
import { Box, Grid } from '@mui/material'
import './PerfilVendedor.css'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

function PerfilVendedor() {
    const token = useSelector<TokenState, TokenState['token']>(
        (state) => state.token
    )
    const vendedorId = useSelector<TokenState, TokenState['id']>(
        (state) => state.id
    )

    const [vendedor, setVendedor] = useState<Vendedor>({
        id: +vendedorId,
        nomeVendedor: "",
        usuario: "",
        senha: "",
        foto: "",
        localidade: "",
        dataDeNascimento: "",
        tipoDePagamento: ""
    })

    async function getVendedorById(id: number) {
        await buscaId(`/vendedor/${id}`, setVendedor, {
            headers: {
                Authorization: token
            }
        })
    }

    useEffect(() => {
        getVendedorById(+vendedorId)
    }, [])
    return (
        <div className='avatar'>
            <Box className='avatar_info'>
                <Grid md={6} className='avatar_secao'>
                    <img src={vendedor.foto} alt=""  className='avatar_img'/>
                </Grid>
                <Grid md={6} className='avatar_secao-info'>
                    <h1 className='avatar_nome'>{vendedor.nomeVendedor}</h1>
                    <h3 className='avatar_texto'>{vendedor.localidade}</h3>
                    <h3 className='avatar_texto'>Você tem um total de <span className='avatar_texto2'>{vendedor.produto?.length}</span> produtos cadastrados</h3>
                </Grid>
            </Box>
            <Box className='avatar_post'>
                <h3 className='avatar_texto'> Esses são os seus produtos cadastrados:</h3>
                {vendedor.produto?.map((post) => ( 
                    <div className='avatar_post-secao'>
                        <ArrowRightIcon/>
                        <h5 className='avatar_texto2'>{post.nome}</h5>
                    </div>
                    
                ))}
            </Box>
        </div>
    )
}

export default PerfilVendedor