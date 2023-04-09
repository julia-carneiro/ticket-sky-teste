
import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Login from "./Components/Login";
import teste from "./Components/teste";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route Component = { Login }  path="/login"/>
        <Route Component = { teste }  path="/teste"/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
