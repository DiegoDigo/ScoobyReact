import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';


import Header from '../components/header'
import Home from '../pages/Home';
import Catalogo from "../pages/Catalogo";
import Galeria from "../pages/Galeria";
import Login from "../pages/Login";




const Router = () => (
    <BrowserRouter>
        <div>
        <Header/>
          <Route exact path="/" component={Home} />
          <Route path="/produtos" component={Catalogo} />
          <Route path="/galeria" component={Galeria} />
          <Route path="/login" component={Login} />
        </div>
  </BrowserRouter>
)

export default Router;
