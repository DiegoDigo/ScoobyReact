import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from '../components/header'

import Home from '../pages/Home';
import Produto from "../pages/Produto";


const Router = () => (
    <BrowserRouter>
        <div>
        <Header/>
          <Route exact path="/" component={Home} />
          <Route path="/produtos" component={Produto} />
        </div>
  </BrowserRouter>
)

export default Router;