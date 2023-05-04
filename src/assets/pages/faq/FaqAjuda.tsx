import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import React from 'react'
import './FaqAjuda.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddCircleIcon from '@mui/icons-material/AddCircle';

function FaqAjuda() {
    return (
        <>
            <Box className='banner_faq'>
                <Typography className='banner_faq-titulo'>FAQ e Ajuda</Typography>
            </Box>
            <Box className='container_acordiao'>
            <h1 className='container_acordiao-titulo'>Sessão de Textos</h1>
                <Accordion className='acordiao'>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className='descricao'>Como cadastrar um Produto? <AddCircleIcon className='cadastrar' /></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className='descricao'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, pariatur cupiditate exercitationem sed mollitia iusto facilis qui aut quae earum eveniet aliquam ab, delectus tempora cum dolorum. Beatae, eos vel.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className='acordiao'>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className='descricao'>Como Atualizar um Produto? <EditIcon className='atualizar'/></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className='descricao'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, pariatur cupiditate exercitationem sed mollitia iusto facilis qui aut quae earum eveniet aliquam ab, delectus tempora cum dolorum. Beatae, eos vel.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className='acordiao'>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className='descricao'>Como Deletar um Produto? <DeleteIcon className='delete'/></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className='descricao'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, pariatur cupiditate exercitationem sed mollitia iusto facilis qui aut quae earum eveniet aliquam ab, delectus tempora cum dolorum. Beatae, eos vel.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Box>
            <Box className='container_acordiao'>
            <Accordion className='acordiao'>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className='descricao'>Como cadastrar uma Categoria? <AddCircleIcon className='cadastrar' /></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className='descricao'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, pariatur cupiditate exercitationem sed mollitia iusto facilis qui aut quae earum eveniet aliquam ab, delectus tempora cum dolorum. Beatae, eos vel.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className='acordiao'>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className='descricao'>Como Atualizar uma Categoria? <EditIcon className='atualizar'/></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className='descricao'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, pariatur cupiditate exercitationem sed mollitia iusto facilis qui aut quae earum eveniet aliquam ab, delectus tempora cum dolorum. Beatae, eos vel.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className='acordiao'>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className='descricao'>Como Deletar uma Categoria? <DeleteIcon className='delete'/></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className='descricao'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, pariatur cupiditate exercitationem sed mollitia iusto facilis qui aut quae earum eveniet aliquam ab, delectus tempora cum dolorum. Beatae, eos vel.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Box>
            <Box className='container_acordiao'>
                <h1 className='container_acordiao-titulo'>Sessão de Vídeos Tutoriais</h1>
            </Box>
            <Box className='container_acordiao'>
                <Typography className='texto-Faq'>Caso sua dúvida não tenha sido respondida, nos mande um email em: grafeat.pda@gmail.com, nos teremos o maior prazer em ajudar!</Typography>
            </Box>
        </>
    )
}

export default FaqAjuda