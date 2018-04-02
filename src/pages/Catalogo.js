import React, {Component} from 'react';
import Produto from '../components/Produto';
import api from '../services/api';
import './css/Catalogo.css';


export default class Catalogo extends Component {

    constructor(props){
        super(props)
        this.state = {
            produtos: null,
        }
    }

    componentDidMount() {
        this.getProducts()
    }


    getProducts = async () =>{
        const { status, data } = await api.get('product/')
        if (status === 200) {
            this.setState({produtos: data})
        }
    }


    render() {
        return (
            <div className="section">
                <div className="">
                    <div className='row'>
                        <div className="col s12 cards-container">
                            {
                                this.state.produtos === null ? <h1>Loading...</h1> :
                                this.state.produtos.map((produto) =>
                                    <Produto produto={produto} key={produto.id}/>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}