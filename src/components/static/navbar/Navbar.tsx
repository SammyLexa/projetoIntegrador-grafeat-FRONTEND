import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import { Box, Container, Grid, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'
import MenuIcon from '@mui/icons-material/Menu';
import useLocalStorage from 'react-use-localstorage';
import PerfilDeslogado from './perfil/PerfilDeslogado';
import PerfilLogado from './perfil/PerfilLogado';

const page = [{
    nome: 'Sobre Nós',
    link: '/sobre-nos'
}, {
    nome: 'Home',
    link: '/home'
}, {
    nome: 'FAQ e Ajuda',
    link: '/ajudaFAQ'
}]
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Navbar() {

    const [token, setToken] = useLocalStorage('token')
    let navigate = useNavigate()

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget)
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null)
    };

    

    
    return (

        <>
            <AppBar position="static" className='navbar' >
                <Container maxWidth="xl">

                    {/* Menu Desk */}

                    <Toolbar disableGutters>
                        <Grid md={2} sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            <img src="https://ik.imagekit.io/grafeat/ilustra%C3%A7%C3%B5es/grafeat-logo-.png?updatedAt=1681816793769" alt="" className='img' />
                        </Grid>
                        

                        <Grid md={7} sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} justifyContent="start">
                            <Link to='/home'>
                                <Box mx={1} className='cursor'>
                                    <Typography variant="h6" style={{color: 'white'}}>
                                        Home
                                    </Typography>
                                </Box>
                            </Link>
                            <Link to='/sobre-nos'>
                                <Box mx={1} className='cursor'>
                                    <Typography variant="h6" style={{color: 'white'}}>
                                        Sobre Nós
                                    </Typography>
                                </Box>
                            </Link>
                            <Link to='/login'>
                                <Box mx={1} className='cursor'>
                                    <Typography variant="h6" style={{color: 'white'}}>
                                        Produtos
                                    </Typography>
                                </Box>
                            </Link>
                            <Link to='/ajudaFAQ'>
                                <Box mx={1} className='cursor'>
                                    <Typography variant="h6" style={{color: 'white'}}>
                                        FAQ e Ajuda
                                    </Typography>
                                </Box>
                            </Link>
                        </Grid>

                        {/* Menu App */}

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {page.map((pages) => (
                                    <MenuItem onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">
                                            <Link to={pages.link}>
                                                <Box mx={1} className='cursor'>
                                                    <Typography variant="h6" color="inherit">
                                                        {pages.nome}
                                                    </Typography>
                                                </Box>
                                            </Link>
                                        </Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>

                        {/* Logo */}

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }} justifyContent={"center"}>
                        <img src="https://ik.imagekit.io/grafeat/ilustra%C3%A7%C3%B5es/grafeat-logo-.png?updatedAt=1681816793769" alt="" className='img' />
                        </Box>

                        {/* Perfil */}
                        <Grid md={3} sx={{ flexGrow: 0 }}>
                            {(token != "") && (<PerfilLogado/>)}
                            {(token == "") && (<PerfilDeslogado/>)}
                        </Grid>
                    </Toolbar>
                </Container>


            </AppBar>

        </>
    )
}

export default Navbar;