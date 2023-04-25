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
                        
                        <Box>
                            <img src="https://ik.imagekit.io/grafeat/ilustra%C3%A7%C3%B5es/grafeat-logo-.png?updatedAt=1681816793769" alt="Logo do Grafeat" className='logoNavbar'/>
                        </Box>

                        <Box display="flex">
                            <Link to='/home'>  
                                <Box mx={1} className='navbarConfig'>
                                    <Typography variant="h6" color="inherit">
                                        Home
                                    </Typography>
                                </Box>
                            </Link>
                            <Link to='/sobre-nos'>    
                                <Box mx={1} className='navbarConfig'>
                                    <Typography variant="h6" color="inherit">
                                        Sobre mim
                                    </Typography>
                                </Box>
                            </Link>
                            <Link to='/login'>  
                                <Box mx={1} className='navbarConfig'>
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