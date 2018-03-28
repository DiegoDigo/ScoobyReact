import React, {Component} from 'react';
import M from 'materialize-css';
import './css/Login.css';

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user : '',
            password: ''
        }
    }

      componentDidMount(){

    }

    render() {
        return(
            <div className='form-login'>
                 <div class="row">
                     <h1 className="center">Login Scooy</h1>
                    <form class="col s12">
                       <div class="row">
                            <div class="input-field col s12">
                                <input id="email" type="email" class="validate" />
                                <label for="email">Email</label>
                            </div>
                          </div>
                          <div class="row">
                            <div class="input-field col s12">
                              <input id="password" type="password" class="validate"/>
                              <label for="password">Senha</label>
                            </div>
                          </div>
                          <div class="row">
                              <div class="input-field col s12">
                              <input type="submit" value="Acessar" className="btn btn-block col s12 teal"/>
                              </div>
                          </div>
                    </form>
                  </div>
                </div>
        )
    }
}