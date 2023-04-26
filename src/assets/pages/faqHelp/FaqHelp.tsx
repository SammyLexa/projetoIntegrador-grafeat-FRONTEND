import React from 'react'
import './FaqHelp.css'
import { Accordion, AccordionDetails, AccordionSummary, Grid, Typography } from '@material-ui/core'
import { Box } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import UpdateIcon from '@mui/icons-material/Update';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function FaqHelp() {
  return (
    <>
      <Grid container xs={12} justifyContent='center' className='containerAjuda'>
        <Grid item xs={12} md={6}>
          <Box textAlign={'center'} justifyContent='center'> 
            <Typography variant='h2' className='tituloAjuda'>Precisa de Ajuda ?</Typography>
            <Grid xs={6} alignContent='center' justifyContent='center'>
            <Typography variant="subtitle1" className='legendaAjuda'>Aqui encontrará as respostas de quaisquer dúvidas, assim como tutoriais para utilizar o Grafeat!</Typography>
            </Grid>
          </Box>
        </Grid>
        <Grid xs={12} md={6}>
          <img src="https://ik.imagekit.io/grafeat/ilustra%C3%A7%C3%B5es/FAQs-cuate.svg?updatedAt=1682476576682" alt="" />
        </Grid>
      </Grid>
      <Box className='acordeao' justifyContent={'center'} alignContent={'center'}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            
          >
            <Typography>Como <span className='cadastrarVerde'>Cadastrar</span> um Produto ? <AddCircleIcon className='cadastrarVerde' /></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/3OZWt8r70wI" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Como <span className='atualizarLaranja'>Atualizar</span> um Produto ? <UpdateIcon className='atualizarLaranja'/></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Como <span className='deletarVermelho'>Deletar</span> um Produto ? <DeleteForeverIcon className='deletarVermelho' /></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Como <span className='cadastrarVerde'>Cadastrar</span> uma Categoria ? <AddCircleIcon className='cadastrarVerde' /></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Como <span className='atualizarLaranja'>Atualizar</span> uma Categoria ? <UpdateIcon className='atualizarLaranja'/></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Como <span className='deletarVermelho'>Deletar</span> uma Categoria ? <DeleteForeverIcon className='deletarVermelho' /></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </>
  )
}

export default FaqHelp