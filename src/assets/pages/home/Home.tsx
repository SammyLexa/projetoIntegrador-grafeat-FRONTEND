
import React, { useEffect, useState } from 'react';
import { Typography, Grid, Container } from '@material-ui/core';
import './Home.css';
import CarouselHome from '../../../components/aliceCarousel/CarouselHome/CarouselHome';
import ListaProdutos from '../../../components/produtos/listaProdutos/ListaProdutos';

import { Box } from '@mui/material';
import CarouselProdutos from '../../../components/aliceCarousel/Produtos/CarouselProdutos';
import Vendedor from '../../../components/models/Vendedor';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { useSelector } from 'react-redux';



const Home: React.FC = () => {

  return (
    <Box className="container">
      <Box justifyContent='center'><CarouselHome /></Box>
      <Box className='home'>
        <h1 className='home_titulo'> Bem-vindo a Loja </h1>
        <img className='logo' src="https://ik.imagekit.io/grafeat/logos/simple-grafeat-logo?updatedAt=1683211137002" alt="Logo do Grafeat" />
        <div className='detalhe-1'></div>
        <div className='detalhe-2'></div>
        <div className='detalhe-3'></div>
        <div className='detalhe-4'></div>
      </Box>
      <h2 className='sub_titulo'>
        Confira nossos produtos incríveis e aproveite as ofertas!
      </h2>
      <Box className='fundoOferta' textAlign={'center'}>
        <img className='ofertaImagem' src="https://ik.imagekit.io/grafeat/banners/banner-oferta?updatedAt=1683211096919" alt="" />
      </Box>

      <Grid justifyContent='center' alignContent='center' alignItems='center' className='fundoProdutos'>
        <CarouselProdutos/>
      </Grid>
    </Box>
  );
};

export default Home;
