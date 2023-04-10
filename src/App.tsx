
import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Login from "./Components/Login";
import Cadastro from "./Components/Cadastro";
import teste from "./Components/teste";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route Component = { Login }  path="/login"/>
        <Route Component = { teste }  path="/teste"/>
        <Route Component = { Cadastro }  path="/cadastro" />
      </Routes>
    </BrowserRouter>
  )
}

export default App
