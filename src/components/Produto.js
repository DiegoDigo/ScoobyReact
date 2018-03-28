import React from 'react';
import './css/Produto.css';

const Produto = (props) => (
        <div className="card">
            <div className="center">
                <img className="responsive-img card-img-prod" src={ props.produto.img } alt="Rações"/>
                <div className="divider" />
            </div>
            <div className="card-content">
              <span className="card-title">{props.produto.nome}</span>
              <p>{ props.produto.descricao }</p>
            </div>
            <div className="card-action center">
                <a><i className="material-icons left">add_shopping_cart</i>Comprar</a>
            </div>
      </div>
)


export default Produto;