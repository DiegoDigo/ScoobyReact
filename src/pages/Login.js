import React, {Component} from 'react';
import './css/Login.css';

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user : '',
            password: ''
        }
    }

    render() {
        return(
            <div className='form-login'>
                <h1>Login</h1>
                <form>
                    <div class="input-field col s12">
                        <i class="material-icons prefix">textsms</i>
                        <input type="text" id="autocomplete-input" class="autocomplete" />
                        <label for="autocomplete-input">Autocomplete</label>
                    </div>
                </form>
            </div>
        )
    }
}