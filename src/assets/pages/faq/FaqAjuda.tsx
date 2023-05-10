import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import React from 'react'
import './FaqAjuda.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Link } from 'react-router-dom';

function FaqAjuda() {
    return (
        <>
            <Box className='banner_faq'>
                <Typography className='banner_faq-titulo'>FAQ e Ajuda</Typography>
            </Box>
            <Box className='container_acordiao'>
                <p className='texto-Faq'>Aqui você poderá tirar suas dúvidas sobre o funcionamento do site, através da sessão de texto e de vídeo legendado</p>
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
                            Para cadastrar um produto é necessário estar logado, caso não tenha uma conta, <Link to='/cadastrar-usuario' className='underline'>cadastre-se</Link>. Clique na sua foto de perfil, depois clique em "Cadastrar Produto". Então você será redirecionado para a página de formulário, onde deve preencher todos os campos obrigatórios (Nome, Descrição, Preço, Tamanho, Quantidade, Link da foto) depois selecione uma categoria, caso a categoria não tenha sido criada ainda, cadastre uma nova primeiro, então clique no botão "Salvar" e o produto terá sido cadastrado.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className='acordiao'>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className='descricao'>Como Atualizar um Produto? <EditIcon className='atualizar' /></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className='descricao'>
                            Para atualizar um produto é necessário estar logado, caso não tenha uma conta, <Link to='/cadastrar-usuario' className='underline'>cadastre-se</Link>. Clique em "Produtos" no menu, depois clique no icone de lápis. Então você será redirecionado para a página de formulário de atualização, onde deve preencher todos os campos obrigatórios (Nome, Descrição, Preço, Tamanho, Quantidade, Link da foto) depois selecione uma categoria, caso a categoria não tenha sido criada ainda, cadastre uma nova primeiro, então clique no botão "Salvar" e o produto terá sido atualizado.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className='acordiao'>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className='descricao'>Como Deletar um Produto? <DeleteIcon className='delete' /></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className='descricao'>
                            Para deletar um produto é necessário estar logado, caso não tenha uma conta, <Link to='/cadastrar-usuario' className='underline'>cadastre-se</Link>. Clique em "Produtos", depois clique no icone de lixeira e será redirecionado para a página de deletar, selecione a opção "Sim" para confirmar e efetuar o delete.
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
                            Para cadastrar uma categoria é necessário estar logado, caso não tenha uma conta, <Link to='/cadastrar-usuario' className='underline'>cadastre-se</Link>. Clique na sua foto de perfil, depois clique em "Cadastrar Categoria". Então você será redirecionado para a página de formulário, onde deve preencher todos os campos obrigatórios (Nome da categoria) depois clique no botão "Salvar" e a categoria terá sido cadastrada.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className='acordiao'>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className='descricao'>Como Atualizar uma Categoria? <EditIcon className='atualizar' /></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className='descricao'>
                            Para atualizar uma categoria é necessário estar logado, caso não tenha uma conta, <Link to='/cadastrar-usuario' className='underline'>cadastre-se</Link>. Clique em "Categorias" no menu, depois clique no icone de lápis. Então você será redirecionado para a página de formulário de atualização, onde deve preencher todos os campos obrigatórios (Nome da Categoria) depois clique no botão "Salvar" e o categoria terá sido atualizada.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className='acordiao'>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className='descricao'>Como Deletar uma Categoria? <DeleteIcon className='delete' /></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className='descricao'>
                            Para deletar uma categoria é necessário estar logado, caso não tenha uma conta, <Link to='/cadastrar-usuario' className='underline'>cadastre-se</Link>. Clique em "Categorias", depois clique no icone de lixeira e será redirecionado para a página de deletar, selecione a opção "Sim" para confirmar e efetuar o delete.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Box>
            <Box className='container_acordiao'>
                <h1 className='container_acordiao-titulo'>Sessão de Vídeos Tutoriais</h1>
            </Box>
            <Box justifyContent={'center'} textAlign={'center'}><iframe width="75%" height="615"  src="https://www.youtube.com/embed/oHl2HndpVYE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></Box>
            <Box className='container_acordiao'>
                <Typography className='texto-Faq'>Caso sua dúvida não tenha sido respondida, nos mande um email em: grafeat.pda@gmail.com, nos teremos o maior prazer em ajudar!</Typography>
            </Box>
        </>
    )
}

export default FaqAjuda