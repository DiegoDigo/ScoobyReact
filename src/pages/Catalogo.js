import React, {Component} from 'react';
import Produto from '../components/Produto';
import './css/Catalogo.css';


const produtos = [
        {'id':1,'nome':'Pedigre Filhote','descricao':'Ração para filhotes pequenos asdfsad asd asd asd asd asd ads asd asd asd','img':'https://www.gstatic.com/webp/gallery3/2.png'},
        {'id':2,'nome':'Pedigre Adulto','descricao':'Ração para adulto','img':'https://www.gstatic.com/webp/gallery3/2.png'},
        {'id':3,'nome':'Pedigre Filhote','descricao':'Ração para filhsd asd asd ad asd asdasd asd asd','img':'https://www.gstatic.com/webp/gallery3/2.png'},
         {'id':4,'nome':'Pedigre Filhote','descricao':'Ração para filhsd ','img':'https://www.gstatic.com/webp/gallery3/2.png'},
         {'id':5,'nome':'Pedigre Filhote','descricao':'Ração para filhsd asd asd ad asd asdasd asd asd','img':'https://www.gstatic.com/webp/gallery3/2.png'},
         {'id':6,'nome':'Pedigre Filhote','descricao':'Ração para filhsd ','img':'https://www.gstatic.com/webp/gallery3/2.png'},
         {'id':7,'nome':'Pedigre Filhote','descricao':'Ração para filhsd ','img':'https://www.gstatic.com/webp/gallery3/2.png'},
     {'id':8,'ome':'Pedigre Filhote','descricao':'Ração para filhsd asd asd ad asd asdasd asd asd','img':'https://www.gstatic.com/webp/gallery3/2.png'},
     {'id':9,'nome':'Pedigre Filhote','descricao':'Ração para filhsd ','img':'https://www.gstatic.com/webp/gallery3/2.png'},
         {'id':10,'nome':'Pedigre Filhote','descricao':'Ração para filhsd ','img':'https://www.gstatic.com/webp/gallery3/2.png'},
     {'id':11,'nome':'Pedigre Filhote','descricao':'Ração para filhsd asd asd ad asd asdasd asd asd','img':'https://www.gstatic.com/webp/gallery3/2.png'},
     {'id':12,'nome':'Pedigre Filhote','descricao':'Ração para filhsd ','img':'https://www.gstatic.com/webp/gallery3/2.png'},
 ]


export default class Catalogo extends Component {

    constructor(props){
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className="section">
                <div className="">
                    <div className='row'>
                        <div class="col s12 cards-container">
                             {
                                produtos.map((produto) =>
                                    <Produto produto={ produto } key={ produto.id }/>
                                )
                             }
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}