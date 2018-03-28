import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import './css/Home.css'

export default class Home extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render() {
        return(
        <div className="container">
            <div className="row">
               	<div className="col m5 hide-on-med-and-down">
			        <img className="responsive-img img" src={require('../static/img/banho.png')} alt="Banho & Tosa"/>
		        </div>
		        <div className="col l7 m12 s12 medium-device" id="lin">
			        <h1 id="Banho">Banho & Tosa</h1>
			        <p>Contamos com uma equipe de profissionais qualificados para deixar o seu bichinho de estimação mais limpo, bonito e saudáve</p>
			        <p className="neg">Banho - Tosa Higiênica - Tosa Estética - Hidratação - Limpeza das Orelhas - Corte de Unhas</p>
                    <p className="right"><Link to="/">Conheça nossa galeria</Link></p>
                </div>
            </div>
            <div className="divider"/>
            <div className="row">
               <div className="col l7 m12 s12 medium-device" id="lin">
			        <h1>Taxi Dog</h1>
			        <p>Buscamos o seu bichinho de estimação na sua casa. O transporte é realizado em caixas de transportes individualizadas e higienizadas. </p>
			        <p className="neg">Taxi Dog</p>
		        </div>
		        <div className="col m5 hide-on-med-and-down">
			        <img className="responsive-img img" src={require('../static/img/transp.png')} alt="Taxi Dog"/>
                </div>
            </div>
            <div className="divider" />
            <div className="row">
               <div className="col s5 hide-on-med-and-down" >
	        		<img className="responsive-img img" src={require('../static/img/racao.png')} alt="Rações"/>
               </div>
		        <div className="col l7 m12 s12 medium-device" id="lin">
			        <h1>venda de ração</h1>
			        <p> A ração do seu melhor amigo acabou? É só ligar que entregamos na sua casa!</p>
			        <p className="neg">Tele Entrega</p>
                    <p className="right"><Link to="/produtos">Conheça nossos produtos</Link></p>
                </div>
            </div>
        </div>
        )
    }

}