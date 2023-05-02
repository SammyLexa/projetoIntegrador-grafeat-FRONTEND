import React, { useEffect, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Produto from '../../models/Produto';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { busca } from '../../services/Service';
import { Link } from 'react-router-dom';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { makeStyles } from '@mui/material';
import './CarouselProdutos.css'



function CarouselProdutos() {
    const [produtos, setProdutos] = useState<Produto[]>([])
    const token = useSelector<TokenState, TokenState["token"]>(
        (state) => state.token
    )

    async function getProduto() {
        await busca("/produtos", setProdutos, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {
        getProduto()
    }, [produtos.length])
    
    const items = produtos.map((produto) => (
        <div className='carouselItem'>
            <div className='carouselProduto'>
                <Link to={`/produtoDetalhado/${produto.id}`}>
                    <img className='Card_img' src={produto.linkFoto} alt="" />
                </Link>
                <div className='Card_conteudo'>
                    <h1 className='Card_titulo'>{produto.nome}</h1>
                    <p className='Card_descricao'>{produto.descricao}</p>
                    <div className='Card_info'>
                        <AttachMoneyIcon style={{ color: 'white' }} />
                        <h2 className='Card_valor'>{`R$ ${produto.preco}`}</h2>
                    </div>
                </div>
                <div className='Card_criador'>
                    <img src={produto.vendedor?.foto} alt="avatar" className="small-avatar" />
                    <p className='Card_descricao'>Criado por <span className='nome_criador'>{produto.vendedor?.nomeVendedor}</span></p>
                </div>
            </div>
        </div>
    ))

    const responsive = {
        0: {
            items: 2,
        },
        512: {
            items: 4,
        },
    };

    return (
        <div className='carousel'>
            <AliceCarousel
                mouseTracking
                infinite
                autoPlayInterval={1000}
                animationDuration={1500}
                disableDotsControls
                disableButtonsControls
                responsive={responsive}
                items={items}
                autoPlay
            />
        </div>
    )
}

export default CarouselProdutos