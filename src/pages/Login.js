import React, {Component} from 'react';
import './css/Login.css';

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email : '',
            password: ''
        }
        this.submit = this.submit.bind(this);
        this.handleChangePass = this.handleChangePass.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
    }

    handleChangeEmail = (event) => {
        this.setState({email: event.target.value});
    }

    handleChangePass = (event) => {
        this.setState({password: event.target.value});
    }

    submit = (e) => {
        e.preventDefault()
        const email = this.state.email;
        const pass = this.state.password;
        console.log(email, pass)
    }

    render() {
        return(
            <div className='form-login'>
                 <div class="row">
                     <h1 className="center">Login Scooy</h1>
                    <form class="col s12" onSubmit={ this.submit }>
                       <div class="row">
                            <div class="input-field col s12">
                                <input id="email" type="email" class="validate"
                                       value={this.state.email} onChange={this.handleChangeEmail} />
                                <label for="email">Email</label>
                            </div>
                          </div>
                          <div class="row">
                            <div class="input-field col s12">
                              <input id="password" type="password"
                                     value={this.state.password} onChange={this.handleChangePass} />
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
