import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import { Box, Container, Grid, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'
import MenuIcon from '@mui/icons-material/Menu';
import PerfilDeslogado from './perfil/PerfilDeslogado';
import PerfilLogado from './perfil/PerfilLogado';
import { useSelector, useDispatch } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { addToken } from '../../../store/tokens/action';
import { toast } from 'react-toastify';

const page = [{
    nome: 'Sobre Nós',
    link: '/sobre-nos'
}, {
    nome: 'Home',
    link: '/home'
}]
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Navbar() {

    const token = useSelector<TokenState, TokenState['token']>(
        (state) => state.token
    )
    const dispatch = useDispatch()
    let navigate = useNavigate()

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget)
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null)
    };


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

        <>
            <AppBar position="static" className='navbar' >
                <Container maxWidth="xl">

                    {/* Menu Desk */}

                    <Toolbar disableGutters>
                        <Grid md={2} sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            <img src="https://ik.imagekit.io/grafeat/logos/simple-grafeat-logo?updatedAt=1683211137002" alt="" className='img' />
                        </Grid>


                        <Grid md={7} sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} justifyContent="start">
                            <Link to='/home'>
                                <Box mx={1} className='cursor'>
                                    <Typography variant="h6" style={{ color: 'white' }}>
                                        Home
                                    </Typography>
                                </Box>
                            </Link>
                            <Link to='/sobre-nos'>
                                <Box mx={1} className='cursor'>
                                    <Typography variant="h6" style={{ color: 'white' }}>
                                        Sobre Nós
                                    </Typography>
                                </Box>
                            </Link>
                            <Link to='/produtos'>
                                <Box mx={1} className='cursor'>
                                    <Typography variant="h6" style={{ color: 'white' }}>
                                        Produtos
                                    </Typography>
                                </Box>
                            </Link>
                            {(token != "") ? (<Link to='/categorias'>
                                <Box mx={1} className='cursor'>
                                    <Typography variant="h6" style={{ color: 'white' }}>
                                        Categorias
                                    </Typography>
                                </Box>
                            </Link>) : ""}
                            <Link to='/faq-ajuda'>
                                <Box mx={1} className='cursor'>
                                    <Typography variant="h6" style={{ color: 'white' }}>
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
                                    <Link to={pages.link}>
                                        <MenuItem onClick={handleCloseNavMenu}>
                                            <Typography textAlign="center">
                                                <Box mx={2} className='cursor'>
                                                    <Typography variant="h6" color="inherit">
                                                        {pages.nome}
                                                    </Typography>
                                                </Box>
                                            </Typography>
                                        </MenuItem>
                                    </Link>
                                ))}
                            </Menu>
                        </Box>

                        {/* Logo */}

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }} justifyContent={"center"}>
                            <img src="https://ik.imagekit.io/grafeat/ilustra%C3%A7%C3%B5es/grafeat-logo-.png?updatedAt=1681816793769" alt="" className='img' />
                        </Box>

                        {/* Perfil */}
                        <Grid md={3} sx={{ flexGrow: 0 }}>
                            {(token != "") ? (<PerfilLogado />) : (<PerfilDeslogado />)}
                        </Grid>
                    </Toolbar>
                </Container>


            </AppBar>

        </>
    )
}

export default Navbar;