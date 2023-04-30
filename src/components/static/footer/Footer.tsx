import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Typography, Grid } from '@material-ui/core';
import { Box } from '@mui/material';
import './Footer.css';
import { GitHub } from '@mui/icons-material';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='container_footer'>
            <Box className='footer'>
                <Box className='footer_info'>
                    <h2 className='footer_titulo'>Entre em contato:</h2>
                    <a href="https://linktr.ee/grafeat" target="_blank" rel="noopener noreferrer">
                        <img src='https://ik.imagekit.io/grafeat/ilustra%C3%A7%C3%B5es/Linktree_logo.svg.png?updatedAt=1682379896369' alt='Logo do linktree' className='redes' />
                    </a>
                    <h2 className='footer_titulo'>Grafeat©</h2>
                </Box>
                <Box className='footer_info'>
                    <h2 className='footer_titulo'>Vendedor</h2>
                    <ul className='footer_lista'>
                        <li><Link to="/formularioProduto" style={{color: 'white'}}> Cadastrar Produto</Link></li>
                        <li><Link to="/formularioCategoria" style={{color: 'white'}}>Cadastrar Categoria</Link></li>
                        <li>Perfil</li>
                    </ul>
                </Box>
                <Box className='footer_info'>
                    <h2 className='footer_titulo'>Cliente</h2>
                    <ul className='footer_lista'>
                        <li><Link to="/produtos" style={{color: 'white'}}>Produtos</Link></li>
                        <li>FAQ</li>
                    </ul>
                </Box>
            </Box>
        </div>
    )
}
// gosto muito de vcs
export default Footer;