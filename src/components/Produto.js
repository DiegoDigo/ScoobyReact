import React from 'react';
import './css/Produto.css';

const Produto = (props) => (
        <div class="card">
            <div>
                <img className="responsive-img card-img-prod" src={ props.produto.img } alt="Rações"/>
            </div>
            <div class="card-content">
              <span class="card-title">{props.produto.nome}</span>
              <p>{ props.produto.descricao }</p>
            </div>
            <div class="card-action center">
                <a><i className="material-icons left">add_shopping_cart</i>Comprar</a>
            </div>
      </div>
)


export default Produto;