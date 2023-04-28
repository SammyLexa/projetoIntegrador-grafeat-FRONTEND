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
import WifiProtectedSetupIcon from '@mui/icons-material/WifiProtectedSetup';
import { toast } from 'react-toastify';

function ListaProdutos() {
    const [produtos, setProdutos] = useState<Produto[]>([])
    let navigate = useNavigate()
    const token = useSelector<TokenState, TokenState["token"]>(
        (state) => state.token
    )

    useEffect(() => {
        if (token == '') {
            toast.warn('Você precisa estar logado', {
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
        <div className='Card'>
            {
                produtos.map(produto => (

                    <div className='Card_container'>
                        <img className='Card_img' src={produto.linkFoto} alt="" />
                        <div className='Card_conteudo'>
                            <h1 className='Card_titulo'>{produto.nome}</h1>
                            <p className='Card_descricao'>{produto.descricao}</p>
                            <div className='Card_info'>
                                <AttachMoneyIcon style={{ color: 'white' }} />
                                <h2 className='Card_valor'>{`R$ ${produto.preco}`}</h2>

                            </div>
                        </div>
                        <div className='Card_criador'>
                            <img src="https://i.postimg.cc/SQBzNQf1/image-avatar.png" alt="avatar" className="small-avatar" />
                            <p className='Card_descricao'>Criado por <span className='nome_criador'>Jules Wyvern</span></p>
                        </div>
                        <div className='acoes'>
                            <Link to={`/formularioProduto/${produto.id}`} className="text-decorator-none" >
                                <div>
                                    <IconButton aria-label="update">
                                        <WifiProtectedSetupIcon />
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
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ListaProdutos