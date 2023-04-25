import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {Typography,Grid } from '@material-ui/core';
import {Box} from '@mui/material';
import './Footer.css';
import { GitHub } from '@mui/icons-material';

function Footer() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box className='box1'>
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom className='textos'>Entre em contato:</Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://linktr.ee/grafeat" target="_blank" rel="noopener noreferrer">
                                <img src='https://ik.imagekit.io/grafeat/ilustra%C3%A7%C3%B5es/Linktree_logo.svg.png?updatedAt=1682379896369' alt='Logo do linktree' className='redes' />
                            </a>
                            
                        </Box>
                    </Box>
                    <Box className='box2'>
                        <Box paddingTop={2}>
                            <Typography variant="subtitle2" align="center" gutterBottom className='textos'>Grafeat©</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}
// gosto muito de vcs
export default Footer;