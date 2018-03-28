import React, {Component} from 'react';
import M from 'materialize-css';

const imagens = [
        {'id':1,'img':'https://www.gstatic.com/webp/gallery3/1.png'},
        {'id':2,'img':'https://www.gstatic.com/webp/gallery3/2.png'},
        {'id':3,'img':'https://www.gstatic.com/webp/gallery3/3.png'},
        {'id':4,'img':'https://www.gstatic.com/webp/gallery3/5.png'},
        {'id':5,'img':'https://www.gstatic.com/webp/gallery3/6.png'},
        {'id':6,'img':'https://www.gstatic.com/webp/gallery3/7.png'},
        {'id':7,'img':'https://www.gstatic.com/webp/gallery3/8.png'},
        {'id':8,'img':'https://www.gstatic.com/webp/gallery3/9.png'},
        {'id':9,'img':'https://www.gstatic.com/webp/gallery3/10.png'},
        {'id':10,'img':'https://www.gstatic.com/webp/gallery3/11.png'},
        {'id':11,'img':'https://www.gstatic.com/webp/gallery3/12.png'},
        {'id':12,'img':'https://www.gstatic.com/webp/gallery3/13.png'},
]


export default class Galeria extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    componentDidMount(){
         M.Materialbox.init(this.materialbox);
    }

      render() {
        return(
            <div>
                <div className="center">
                    <h1 className='title'>Confira nossos Trabalhos</h1>
                </div>
                <div className="row">
                    <div className="col s3">
                          <div className="card small">
                              <img className="materialboxed responsive-img" alt="imagens"
                                   ref={ (img) => this.materialbox = img }
                                   src = { 'https://www.gstatic.com/webp/gallery3/3.png'}/>
                          </div>
                    </div>
                </div>
            </div>

        )
    }

}