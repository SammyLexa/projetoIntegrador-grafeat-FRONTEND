import { Avatar, Box, IconButton, Menu, MenuItem, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'
import Vendedor from '../../../models/Vendedor';
import { Link, useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import './Perfil.css'

const navVendedor = [{
    nome: 'Cadastrar Produtos',
    link: ''
}, {
    nome: 'Cadastrar Temas',
    link: ''
}];

function PerfilLogado() {

    const [token, setToken] = useLocalStorage('token')
    let navigate = useNavigate()

    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null)

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget)
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null)
    };

    const [vendedor, setVendedor] = useState<Vendedor>()

    const nome = `Olá, ${vendedor?.nomeVendedor}`

    function goLogout(){
        setToken('')
        alert("Usuário deslogado")
        navigate('/login')
      }

    return (
        <div className='perfil'>
            <Typography>{vendedor?.nomeVendedor}</Typography>
            <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src={vendedor?.foto} />
                </IconButton>
            </Tooltip>
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
                    <MenuItem onClick={handleCloseUserMenu}>
                        <Link to={nav.link}>
                        <Box>
                            <Typography textAlign="center" style={{color: 'black'}}>{nav.nome}</Typography>
                        </Box>
                        </Link>
                    </MenuItem>
                ))}
                <MenuItem onClick={handleCloseUserMenu}>
                        <Box  onClick={goLogout}>
                            <Typography textAlign="center">Sair</Typography>
                        </Box>
                    </MenuItem>
            </Menu>
        </div>
    )
}

export default PerfilLogado