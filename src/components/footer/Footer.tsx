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
                            <Typography variant="h5" align="center" gutterBottom className='textos'>Conheça mais sobre o time e nosso projeto:</Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://github.com/pedroapinheiro/projetoIntegrador-grafeat-FRONTEND.git" target="_blank" rel="noopener noreferrer">
                                <GitHubIcon className='redes' />
                            </a>
                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                <LinkedInIcon className='redes' />
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