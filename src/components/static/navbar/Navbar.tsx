import React from 'react';
import { AppBar, Toolbar, Typography} from '@material-ui/core';
import {Box} from '@mui/material';
import { Link } from 'react-router-dom';
import './Navbar.css'
function Navbar() {
    return (
        <>
            <AppBar position="static" className='navbarFundo' >
                <Toolbar variant="dense">
                    <Box className='cursor'>
                        <Typography variant="h5">
                            Grafeat
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start">
                        <Link to='/home'>  
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    Home
                                </Typography>
                            </Box>
                        </Link>
                        <Link to='/sobre-nos'>    
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    Sobre mim
                                </Typography>
                            </Box>
                        </Link>
                        <Link to='/login'>  
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    Logout
                                </Typography>
                            </Box>
                        </Link>
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;