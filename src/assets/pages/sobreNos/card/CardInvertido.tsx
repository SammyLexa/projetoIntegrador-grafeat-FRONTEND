import { Box } from '@mui/material'
import React from 'react'
import '../SobreNos.css'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function CardInvertido({ nome, cargo, bio, linkedIn, github, img }: { nome: string, cargo: string, bio: string, linkedIn: string, github: string, img:string }) {
    return (
        <Box className='card'>
            <img src={img} alt="" className='img' />
            <Box className='card_info'>
                <div className='info_link'>
                    <a href={linkedIn} target="_blank">
                        <LinkedInIcon style={{ fontSize: 30, color: "white" }} />
                    </a>
                    <a href={github} target="_blank">
                        <GitHubIcon style={{ fontSize: 30, color: "white" }}></GitHubIcon>
                    </a>
                </div>
                <div className='info_secao'>
                    <h2 className='secao_titulo'>{nome}</h2>
                    <h5 className="secao_texto">{cargo}</h5>
                    <p className="secao_texto">{bio}</p>
                </div>
            </Box>
        </Box>
    )
}

export default CardInvertido