import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Login from "./App";
import Cadastro from "./App";
import teste from "./Components/teste";

const Routes = () => {
   return(
       <BrowserRouter>
           <Route Component = { Login }  path="/"/>
           <Route Component = { teste }  path="/teste" />
           <Route Component = { teste }  path="/Cadastro" />
       </BrowserRouter>
   )
}

export default Routes;