
import React from 'react';
import { Typography, Grid, Container } from '@material-ui/core';
import './home.css'; 

const Home: React.FC = () => {
  return (
    <Container maxWidth="md" className="container">
      <div className="banner">
        <Typography variant="h1" align="center" gutterBottom style={{color:"white"}}>
          Bem-vindo a Loja Grafeat!
        </Typography>
        <Typography variant="subtitle1" align="center" gutterBottom style={{color:"white"}}>
          Confira nossos produtos incríveis e aproveite as ofertas!
        </Typography>
      </div>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <img src="https://www.vilaurbanagastronomia.com.br/wp-content/uploads/2022/05/grafite-muro.jpg" alt="Destaque 1" className="destaque" />
          <div className="destaque-footer">Texto do rodapé</div>
        </Grid>
        <Grid item xs={12} md={4}>
          <img src="https://www.vilaurbanagastronomia.com.br/wp-content/uploads/2022/05/grafite-muro.jpg" alt="Destaque 2" className="destaque" />
          <div className="destaque-footer">Texto do rodapé</div>
        </Grid>
        <Grid item xs={12} md={4}>
          <img src="https://www.vilaurbanagastronomia.com.br/wp-content/uploads/2022/05/grafite-muro.jpg" alt="Destaque 3" className="destaque" />
          <div className="destaque-footer">Texto do rodapé</div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
