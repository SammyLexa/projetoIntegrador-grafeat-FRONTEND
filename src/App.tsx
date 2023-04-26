import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import Navbar from './components/static/navbar/Navbar';
import Login from './assets/pages/login/Login';
import SobreNos from './assets/pages/sobreNos/SobreNos';
import CadastrarUsuario from './assets/pages/cadastrarUsuario/CadastrarVendedor';
import Home from './assets/pages/home/Home';
import Footer from './components/static/footer/Footer';
import store from './store/store';
import { Provider } from 'react-redux';



function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <div style={{ minHeight: '100vh' }}>
          <Routes> // Antigo Switch
            <Route path="/" element={<Login />} />

            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/sobre-nos" element={<SobreNos />} />
            <Route path="/cadastrar-usuario" element={<CadastrarUsuario />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

export default App