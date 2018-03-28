import React from 'react';
import { NavLink } from 'react-router-dom';
import './css/header.css'

const Header = () => (
           <nav>
             <div className="nav-wrapper teal navbar z-depth-1">
                 <div className="container">
                    <NavLink to="/" className="brand-logo">Scooby</NavLink>
                     <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li><NavLink to="/produtos">Produtos</NavLink></li>
                         <li><NavLink to="/galeria">Galeria</NavLink></li>
                    </ul>
                 </div>
            </div>
         </nav>

)

export default Header;