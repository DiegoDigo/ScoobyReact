import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from '../components/header'

import Home from '../pages/Home';
import Catalogo from "../pages/Catalogo";
import Galeria from "../pages/Galeria";


const Router = () => (
    <BrowserRouter>
        <div>
        <Header/>
          <Route exact path="/" component={Home} />
          <Route path="/produtos" component={Catalogo} />
          <Route path="/galeria" component={Galeria} />
        </div>
  </BrowserRouter>
)

export default Router;
