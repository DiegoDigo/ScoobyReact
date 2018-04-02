import React, {Component} from 'react';
import api from '../services/api';
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
        this.login(email, pass)
    }

    login = async (email, password) => {
        const login = await api.post('user/login/',{'email':email, 'password': password})
        console.log(login)
        if (login.ok){
            this.props.history.push("/")
        }
    }

    render() {
        return(
            <div className='form-login'>
                 <div className="row">
                     <h1 className="center">Login Scooy</h1>
                    <form className="col s12" onSubmit={ this.submit }>
                       <div className="row">
                            <div className="input-field col s12">
                                <input id="email" type="email" className="validate"
                                       value={this.state.email} onChange={this.handleChangeEmail} />
                                <label htmlFor="email">Email</label>
                            </div>
                          </div>
                          <div className="row">
                            <div className="input-field col s12">
                              <input id="password" type="password"
                                     value={this.state.password} onChange={this.handleChangePass} />
                              <label htmlFor="password">Senha</label>
                            </div>
                          </div>
                          <div className="row">
                              <div className="input-field col s12">
                              <input type="submit" value="Acessar" className="btn btn-block col s12 teal"/>
                              </div>
                          </div>
                    </form>
                  </div>
                </div>
        )
    }
}
