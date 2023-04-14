import React from 'react'
import './SobreNos.css'
import { Grid } from '@mui/material'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


function SobreNos() {
    return (
        <Grid className='container'>
            <Grid xs={12} className='mainContainer'>
                <h1 className='mainContainer_titulo'>Sobre Nós</h1>
            </Grid>
            <Grid className='container_card'>
                <Grid xs={12} className='card'>
                    <Grid xs={8} className='card_info'>
                        <div className='info_secao'>
                            <h2 className='secao_titulo'>Caroline Viana</h2>
                            <h5>Desenvolvedora FullStack</h5>
                            <p>Olá, tenho 22 anos. Sou formada em Gestão de Turismo, pelo Instituto Federal de São Paulo e, apesar de ter adorado a área, sempre tive um grande amor pela tecnologia. Por isso, decidi fazer uma transição de carreira para a programação e hoje estou me qualificando com o objetivo de trabalhar nesse campo!</p>
                        </div>
                        <div className='info_link'>
                            <a href="https://www.linkedin.com/in/caroline-viana-de-medeiros/" target="_blank">
                                <LinkedInIcon style={{ fontSize: 30, color: "black" }} />
                            </a>
                            <a href='https://github.com/Caroline-Viana' target="_blank">
                                <GitHubIcon style={{ fontSize: 30, color: "black" }}></GitHubIcon>
                            </a>
                        </div>
                    </Grid>
                    <img src="https://i.imgur.com/9A5BnsA.jpg" alt="" className='img' />
                </Grid>
                <Grid xs={12} className='card'>
                    <img src="https://i.imgur.com/LaYEvD4.jpg" alt="" className='img' />
                    <Grid xs={8} className='card_info'>
                        <div className='info_link'>
                            <a href="https://www.linkedin.com/in/giyodias/" target="_blank">
                                <LinkedInIcon style={{ fontSize: 30, color: "black" }} />
                            </a>
                            <a href='https://github.com/giyodias' target="_blank">
                                <GitHubIcon style={{ fontSize: 30, color: "black" }}></GitHubIcon>
                            </a>
                        </div>
                        <div className='info_secao'>
                            <h2 className='secao_titulo'>Giyo Dias</h2>
                            <h5>Desenvolvedor FullStack</h5>
                            <p>Olá, tenho 19 anos e estou em transição de carreira para a área tech. Adoro estudar e aprender coisas novas em diversas áreas, principalmente em programação. Curso ADS na FATEC e estou no bootcamp Java Full-Stack da Generation Brasil. Tenho soft skills bem desenvolvidas e sou um membro proativo de grupos.</p>
                        </div>
                    </Grid>
                </Grid>
                <Grid xs={12} className='card'>
                    <Grid xs={8} className='card_info'>
                        <div className='info_secao'>
                            <h2 className='secao_titulo'>Leticia Pires de Souza</h2>
                            <h5>Desenvolvedora FullStack</h5>
                            <p>Estou em transição de carreira e atualmente sou estudante do curso fornecido pela Generation Brasil - Java Full Stack Júnior, sou esforçada e autodidata. Gosto de ler, praticar esportes e defendo open source. Atualmente estudo o universo Java, Spring e Microservices.</p>
                        </div>
                        <div className='info_link'>
                            <a href="https://www.linkedin.com/in/leticia-pires-de-souza-5a1031203/" target="_blank">
                                <LinkedInIcon style={{ fontSize: 30, color: "black" }} />
                            </a>
                            <a href='https://github.com/LeticiaPires12' target="_blank">
                                <GitHubIcon style={{ fontSize: 30, color: "black" }}></GitHubIcon>
                            </a>
                        </div>
                    </Grid>
                    <img src="https://i.imgur.com/OhELD9Q.jpg" alt="" className='img' />
                </Grid>
                <Grid xs={12} className='card'>
                    <img src="https://i.imgur.com/VAYekHf.jpg" alt="" className='img' />
                    <Grid xs={8} className='card_info'>
                        <div className='info_link'>
                            <a href="https://www.linkedin.com/in/pedro-azevedo-2147661b5/" target="_blank">
                                <LinkedInIcon style={{ fontSize: 30, color: "black" }} />
                            </a>
                            <a href='https://github.com/pedroapinheiro' target="_blank">
                                <GitHubIcon style={{ fontSize: 30, color: "black" }}></GitHubIcon>
                            </a>
                        </div>
                        <div className='info_secao'>
                            <h2 className='secao_titulo'>Pedro Azevedo</h2>
                            <h5>Desenvolvedor FullStack</h5>
                            <p>Formação em Gestão de Eventos pela Universidade Positivo - PR. Em Curitiba fiz estágio no ano de 2019 na empresa Mark Messe e migrei para a empresa Cafexpo, atuando no cargo de Auxiliar de Produtor de Eventos.</p>
                        </div>
                    </Grid>
                </Grid>
                <Grid xs={12} className='card'>
                    <Grid xs={8} className='card_info'>
                        <div className='info_secao'>
                            <h2 className='secao_titulo'>Samantha Alexandra Pereira</h2>
                            <h5>Desenvolvedora FullStack</h5>
                            <p>Sou aspirante a Desenvolvedora Web Full-Stack, estou ansiosa para aprender e crescer na área de desenvolvimento web. Minha paixão por criar páginas web envolventes, acessíveis e fáceis de usar me levou a seguir a carreira de desenvolvimento.💻</p>
                        </div>
                        <div className='info_link'>
                            <a href="https://www.linkedin.com/in/samantha-alexandra-pereira/" target="_blank">
                                <LinkedInIcon style={{ fontSize: 30, color: "black" }} />
                            </a>
                            <a href='https://github.com/SammyLexa' target="_blank">
                                <GitHubIcon style={{ fontSize: 30, color: "black" }}></GitHubIcon>
                            </a>
                        </div>
                    </Grid>
                    <img src="https://i.imgur.com/qvUAPJA.jpg" alt="" className='img' />
                </Grid>
                <Grid xs={12} className='card'>
                    <img src="https://i.imgur.com/OH4Xcuf.jpg" alt="" className='img' />
                    <Grid xs={8} className='card_info'>
                        <div className='info_link'>
                            <a href="https://www.linkedin.com/in/wallacesb/" target="_blank">
                                <LinkedInIcon style={{ fontSize: 30, color: "black" }} />
                            </a>
                            <a href='https://github.com/Wall90s' target="_blank">
                                <GitHubIcon style={{ fontSize: 30, color: "black" }}></GitHubIcon>
                            </a>
                        </div>
                        <div className='info_secao'>
                            <h2 className='secao_titulo'>Wallace Silva Brito</h2>
                            <h5>Desenvolvedor FullStack</h5>
                            <p>Invenções e Tecnologias são dois assuntos que sempre fizeram meus olhos brilharem, me fazendo pesquisar e/ou conversar por horas. Depois de um tempo entendi que poderia unir os dois na área de desenvolvimento, desde que é claro, me dedicasse bastante, e é isso que tenho feito. </p>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default SobreNos