import React, { useEffect, useState } from 'react'
import './ListaProdutos.css'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Produto from '../../models/Produto';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { busca } from '../../services/Service';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


function ListaProdutos() {
    const [produtos, setProdutos] = useState<Produto[]>([])
    let navigate = useNavigate()
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
    return (
        <div className='page_produto'>
            <div className='banner_produto'>
                <h1 className='banner_produto-titulo'>Produtos</h1>
            </div>
            <div className='Card'>
            {
                produtos.map(produto => (

                    <div className='Card_container'>
                        <Link to={`/produtoDetalhado/${produto.id}`}>
                            <img className='Card_img' src={produto.linkFoto} alt="" />
                        </Link>
                        <div className='Card_conteudo'>
                            <h2 className='Card_titulo'>{produto.nome}</h2>
                            <p className='Card_descricao'>{produto.descricao}</p>
                            <div className='Card_info'>
                                <AttachMoneyIcon style={{ color: 'white' }} />
                                <h3 className='Card_valor'>{`R$ ${produto.preco}`}</h3>

                            </div>
                        </div>
                        <div className='Card_criador'>
                            <img src={produto.vendedor?.foto} alt="avatar" className="small-avatar" />
                            <p className='Card_descricao'>Criado por <span className='nome_criador'>{produto.vendedor?.nomeVendedor}</span></p>
                        </div>
                        {(token != "") ? (<div className='acoes'>
                            <Link to={`/formularioProduto/${produto.id}`} className="text-decorator-none" >
                                <div>
                                    <IconButton aria-label="update">
                                        <EditIcon />
                                    </IconButton>
                                </div>
                            </Link>
                            <Link to={`/deletarProduto/${produto.id}`} className="text-decorator-none">
                                <div>
                                    <IconButton aria-label="delete">
                                        <DeleteIcon />
                                    </IconButton>
                                </div>
                            </Link>
                        </div>) : ""}
                    </div>
                ))
            }
            </div>
        </div>
    )
}

export default ListaProdutos