import React from 'react'
import './SobreNos.css'
import { Box, Grid } from '@mui/material'
import Card from './card/Card';
import CardInvertido from './card/CardInvertido';

function SobreNos() {

    const carol = {
        nome: 'Caroline Viana',
        cargo: 'Desenvolvedora FullStack',
        bio: 'Olá, tenho 22 anos. Sou formada em Gestão de Turismo, pelo Instituto Federal de São Paulo e, apesar de ter adorado a área, sempre tive um grande amor pela tecnologia. Por isso, decidi fazer uma transição de carreira para a programação e hoje estou me qualificando com o objetivo de trabalhar nesse campo!',
        linkedIn: 'https://www.linkedin.com/in/caroline-viana-de-medeiros/',
        github: 'https://github.com/Caroline-Viana',
        img: 'https://i.imgur.com/9A5BnsA.jpg'
    };

    const giyo = {
        nome: 'Giyo Dias',
        cargo: 'Desenvolvedor FullStack',
        bio: 'Olá, tenho 19 anos e estou em transição de carreira para a área tech. Adoro estudar e aprender coisas novas em diversas áreas, principalmente em programação. Curso ADS na FATEC e estou no bootcamp Java Full-Stack da Generation Brasil. Tenho soft skills bem desenvolvidas e sou um membro proativo de grupos.',
        linkedIn: 'https://www.linkedin.com/in/giyodias/',
        github: 'https://github.com/giyodias',
        img: 'https://i.imgur.com/LaYEvD4.jpg'
    };

    const leticia = {
        nome: 'Leticia Pires de Souza',
        cargo: 'Desenvolvedora FullStack',
        bio: 'Estou em transição de carreira e atualmente sou estudante do curso fornecido pela Generation Brasil - Java Full Stack Júnior, sou esforçada e autodidata. Gosto de ler, praticar esportes e defendo open source. Atualmente estudo o universo Java, Spring e Microservices.',
        linkedIn: 'https://www.linkedin.com/in/leticia-pires-de-souza-5a1031203/',
        github: 'https://github.com/LeticiaPires12',
        img: 'https://i.imgur.com/OhELD9Q.jpg'
    };

    const pedro = {
        nome: 'Pedro Azevedo',
        cargo: 'Desenvolvedor FullStack',
        bio: 'Formação em Gestão de Eventos pela Universidade Positivo - PR. Em Curitiba fiz estágio no ano de 2019 na empresa Mark Messe e migrei para a empresa Cafexpo, atuando no cargo de Auxiliar de Produtor de Eventos.',
        linkedIn: 'https://www.linkedin.com/in/pedro-azevedo-2147661b5/',
        github: 'https://github.com/pedroapinheiro',
        img: 'https://i.imgur.com/VAYekHf.jpg'
    };

    const samantha = {
        nome: 'Samantha Alexandra Pereira',
        cargo: 'Desenvolvedora FullStack',
        bio: 'Sou aspirante a Desenvolvedora Web Full-Stack, estou ansiosa para aprender e crescer na área de desenvolvimento web. Minha paixão por criar páginas web envolventes, acessíveis e fáceis de usar me levou a seguir a carreira de desenvolvimento.💻',
        linkedIn: 'https://www.linkedin.com/in/samantha-alexandra-pereira/',
        github: 'https://github.com/SammyLexa',
        img: 'https://i.imgur.com/qvUAPJA.jpg'
    };

    const wallace = {
        nome: 'Wallace Silva Brito',
        cargo: 'Desenvolvedor FullStack',
        bio: 'Invenções e Tecnologias são dois assuntos que sempre fizeram meus olhos brilharem, me fazendo pesquisar e/ou conversar por horas. Depois de um tempo entendi que poderia unir os dois na área de desenvolvimento, desde que é claro, me dedicasse bastante, e é isso que tenho feito.',
        linkedIn: 'https://www.linkedin.com/in/wallacesb/',
        github: 'https://github.com/Wall90s',
        img: 'https://i.imgur.com/OH4Xcuf.jpg'
    };

    return (
        <Grid className='mainContainer'>
            <Grid xs={12} className='mainContainer_banner'>
                <h1 className='mainContainer_titulo'>Sobre Nós</h1>
            </Grid>
            <Grid className='container_card'>
                <Card {...carol}/>
                <CardInvertido {...giyo}/>
                <Card {...leticia}/>
                <CardInvertido {...pedro}/>
                <Card {...samantha}/>
                <CardInvertido {...wallace}/>
            </Grid>
        </Grid>
    )
}

export default SobreNos