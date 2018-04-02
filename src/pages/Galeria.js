import React, {Component} from 'react';
import M from 'materialize-css';

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
          return <div className="sections">
              <div className="center">
                  <h1 className='title'>Confira nossos Trabalhos</h1>
              </div>
              <div className="row">
                  <div className="col s3">
                      <div className="card small">
                          <img className="materialboxed responsive-img" alt="imagens"
                               ref={(img) => this.materialbox = img}
                               src={'https://www.gstatic.com/webp/gallery3/3.png'}/>
                      </div>
                  </div>
              </div>
          </div>
      }
    }