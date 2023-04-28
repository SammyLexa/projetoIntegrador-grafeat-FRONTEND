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
import CadastroCategoria from './components/categorias/cadastroCategoria/CadastroCategoria';
import CadastroProduto from './components/produtos/cadastroProduto/CadastroProduto';
import { Provider } from 'react-redux';
import ListaCategorias from './components/categorias/listaCategorias/ListaCategorias';
import ListaProdutos from './components/produtos/listaProdutos/ListaProdutos';
import DeletarProduto from './components/produtos/deletarProduto/DeletarProduto';
import DeletarCategoria from './components/categorias/deletarCategoria/DeletarCategoria';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Provider store={store}>
      <ToastContainer />
      <BrowserRouter>
        <Navbar />
        <div style={{ minHeight: '100vh' }}>
          <Routes> // Antigo Switch
            <Route path="/" element={<Login />} />

            <Route path="/login" element={<Login />} />

            <Route path="/cadastrar-usuario" element={<CadastrarUsuario />} />

            <Route path="/home" element={<Home />} />

            <Route path="/sobre-nos" element={<SobreNos />} />

            <Route path="/produtos" element={<ListaProdutos />} />

            <Route path="/categorias" element={<ListaCategorias />} />

            <Route path="/formularioProduto" element={<CadastroProduto />} />

            <Route path="/formularioCategoria" element={<CadastroCategoria />} />

            <Route path="/formularioProduto/:id" element={<CadastroProduto />} />

            <Route path="/formularioCategoria/:id" element={<CadastroCategoria />} />

            <Route path="/deletarProduto/:id" element={<DeletarProduto />} />

            <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

export default App