
import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Login from "./Components/Login";
import Cadastro from "./Components/Cadastro";
import teste from "./Components/teste";
import Usuarios from "./Components/Usuarios";
import UsuarioLogado from "./Components/UsuarioLogado";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route Component={Login} path="/login" />
        <Route Component={teste} path="/teste" />
        <Route Component={Cadastro} path="/cadastro" />
        <Route Component={Usuarios} path="/usuarios" />
        <Route Component={UsuarioLogado} path="/usuarioLogado" />
      </Routes>
    </BrowserRouter>
  )
}

export default App