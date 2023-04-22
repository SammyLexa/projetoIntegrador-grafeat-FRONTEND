import React from 'react'
import'./Perfil.css'
import { Link } from 'react-router-dom'
import { Box } from '@mui/material'

function PerfilDeslogado() {
  return (
    <Box className='nav_btn'>
        <Link to="/cadastrar-usuario">
            <Box className='btn btn_cadastro'>
                <button className='btn btn_cadastro'>Cadastre-se</button>
            </Box>
        </Link>
        <Link to="/login" >
            <Box className='btn btn_login'>
                <button className='btn btn_login'>Entrar</button>
            </Box>
        </Link>
    </Box>
  )
}

export default PerfilDeslogado