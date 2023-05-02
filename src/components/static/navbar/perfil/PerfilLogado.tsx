import { Avatar, Box, IconButton, Menu, MenuItem, Tooltip, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Vendedor from '../../../models/Vendedor';
import { Link, useNavigate } from 'react-router-dom';
import './Perfil.css'
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../../store/tokens/tokensReducer';
import { addToken } from '../../../../store/tokens/action';
import { Button } from '@material-ui/core';
import { toast } from 'react-toastify';
import { buscaId } from '../../../services/Service';

const navVendedor = [{
    nome: 'Cadastrar Produtos',
    link: '/formularioProduto/'
}, {
    nome: 'Cadastrar Categoria',
    link: '/formularioCategoria'
},{
    nome: 'Perfil',
    link: '/perfil'
}];

function PerfilLogado() {

    const token = useSelector<TokenState, TokenState['token']>(
        (state) => state.token
    )
    const dispatch = useDispatch()

    const navigate = useNavigate()

    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null)

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget)
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null)
    };

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

    function goLogout() {
        dispatch(addToken(''))
        toast.success('Usuário deslogado!', {
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

    return (
        <div className='perfil'>
            <div className='perfil_vendedor'>
                <Typography>Olá, {vendedor.nomeVendedor}</Typography>
                <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <Avatar alt="Remy Sharp" src={vendedor.foto} />
                    </IconButton>
                </Tooltip>
            </div>

            <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
            >
                {navVendedor.map((nav) => (
                    <Link to={nav.link}>
                        <MenuItem onClick={handleCloseUserMenu}>
                            <Box>
                                <Typography textAlign="center" style={{ color: 'black' }}>{nav.nome}</Typography>
                            </Box>
                        </MenuItem>
                    </Link>
                ))}

                <MenuItem onClick={handleCloseUserMenu}>
                    <Box onClick={goLogout}>
                        <Typography textAlign="center">Sair</Typography>
                    </Box>
                </MenuItem>
            </Menu>
        </div>
    )
}

export default PerfilLogado