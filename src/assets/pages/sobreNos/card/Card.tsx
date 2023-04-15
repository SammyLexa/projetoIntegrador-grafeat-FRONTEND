import React from 'react'
import '../SobreNos.css'
import { Box } from '@mui/material'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Card({ nome, cargo, bio, linkedIn, github, img }: { nome: string, cargo: string, bio: string, linkedIn: string, github: string, img:string }) {
    return (
        <Box className='card'>
            <Box className='card_info'>
                <div className='info_secao'>
                    <h2 className='secao_titulo'>{nome}</h2>
                    <h5>{cargo}</h5>
                    <p>{bio}</p>
                </div>
                <div className='info_link'>
                    <a href={linkedIn} target="_blank">
                        <LinkedInIcon style={{ fontSize: 30, color: "black" }} />
                    </a>
                    <a href={github} target="_blank">
                        <GitHubIcon style={{ fontSize: 30, color: "black" }}></GitHubIcon>
                    </a>
                </div>
            </Box>
            <img src={img} alt="" className='img' />
        </Box>
    )
}

export default Card