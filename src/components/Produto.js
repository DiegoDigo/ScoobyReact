import React from 'react';
import './css/Produto.css';

const Produto = (props) => (
        <div className="card">
            <div className="center">
                <img className="responsive-img card-img-prod" src={ props.produto.image == null ?
                    require('../static/img/image-not-found.png') : props.produto.image } alt="Rações"/>
            </div>
            <div className="card-content">
              <span className="card-title">{props.produto.name}</span>
                <div className="section center">
                    <h5>R$ { props.produto.price }</h5>
                </div>
            </div>
            <div className="card-action center">
                <a><i className="material-icons left">add_shopping_cart</i>Comprar</a>
            </div>
      </div>
)


export default Produto;