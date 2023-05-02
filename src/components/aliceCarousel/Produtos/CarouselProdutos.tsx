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
    
    const items = [
        <div className='carouselItem'>
            <div className='carouselProduto'>
                <Link to={`/produtoDetalhado/${produtos[5].id}`}>
                    <img className='Card_img' src={produtos[5].linkFoto} alt="" />
                </Link>
                <div className='Card_conteudo'>
                    <h1 className='Card_titulo'>{produtos[5].nome}</h1>
                    <p className='Card_descricao'>{produtos[5].descricao}</p>
                    <div className='Card_info'>
                        <AttachMoneyIcon style={{ color: 'white' }} />
                        <h2 className='Card_valor'>{`R$ ${produtos[5].preco}`}</h2>
                    </div>
                </div>
                <div className='Card_criador'>
                    <img src={produtos[5].vendedor?.foto} alt="avatar" className="small-avatar" />
                    <p className='Card_descricao'>Criado por <span className='nome_criador'>{produtos[5].vendedor?.nomeVendedor}</span></p>
                </div>
            </div>
        </div>,
        <div className='carouselItem'>
            <div className='carouselProduto'>
                <Link to={`/produtoDetalhado/${produtos[10].id}`}>
                    <img className='Card_img' src={produtos[10].linkFoto} alt="" />
                </Link>
                <div className='Card_conteudo'>
                    <h1 className='Card_titulo'>{produtos[10].nome}</h1>
                    <p className='Card_descricao'>{produtos[10].descricao}</p>
                    <div className='Card_info'>
                        <AttachMoneyIcon style={{ color: 'white' }} />
                        <h2 className='Card_valor'>{`R$ ${produtos[10].preco}`}</h2>
                    </div>
                </div>
                <div className='Card_criador'>
                    <img src={produtos[10].vendedor?.foto} alt="avatar" className="small-avatar" />
                    <p className='Card_descricao'>Criado por <span className='nome_criador'>{produtos[10].vendedor?.nomeVendedor}</span></p>
                </div>
            </div>
        </div>
    ]

    const responsive = {
        0: {
            items: 2,
        },
        512: {
            items: 8,
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

                items={items}
                autoPlay
            />
        </div>
    )
}

export default CarouselProdutos