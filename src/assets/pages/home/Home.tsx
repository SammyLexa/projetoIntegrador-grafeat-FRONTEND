
import React from 'react';
import { Typography, Grid, Container } from '@material-ui/core';
import './Home.css';
import CarouselHome from '../../../components/aliceCarousel/CarouselHome/CarouselHome';
import ListaProdutos from '../../../components/produtos/listaProdutos/ListaProdutos';

import { Box } from '@mui/material';
import CarouselProdutos from '../../../components/aliceCarousel/Produtos/CarouselProdutos';



const Home: React.FC = () => {
  return (
    <Box className="container">
      <Box justifyContent='center'><CarouselHome /></Box>
      <Box className='home'>
        <h1 className='home_titulo'> Bem-vindo a Loja </h1>
        <img className='logo' src="https://ik.imagekit.io/grafeat/ilustra%C3%A7%C3%B5es/grafeat-logo-.png?updatedAt=1681816793769" alt="Logo do Grafeat" />
        <div className='detalhe-1'></div>
        <div className='detalhe-2'></div>
        <div className='detalhe-3'></div>
        <div className='detalhe-4'></div>
      </Box>
      <h2 className='sub_titulo'>
        Confira nossos produtos incríveis e aproveite as ofertas!
      </h2>

      <Grid justifyContent='center' alignContent='center' alignItems='center' className='fundoProdutos'>
        <CarouselProdutos/>
      </Grid>
    </Box>
  );
};

export default Home;
