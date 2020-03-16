import React, { Component } from "react";
import Header from './Header';
import userSpace from "./userSpace";
import SubmitButton from "./SubmitButton";
import InputField from './InputField';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { username: '', password: '', buttonDisabled: false }

    }

    setInputValue(property, val) {
        val = val.trim();
        if (val.length > 12) {
            return;
        }
        this.setState({ [property]: val })
    }
    resetForm() {
        this.setState({
            username: '',
            password: '',
            buttonDisabled: false
        })
    }
    async doLogin() {
        
        if (!this.state.username) {
            return;
        }
        if (!this.state.password) {
            return;
        }
        this.setState({
            buttonDisabled: true
        })

        try {
            let res = await fetch('/login', {
               method: 'post',
                 headers: {
                     'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                   username: this.state.username,
                    password: this.state.password
               })

             });
      
        
            let result = await res.json();
            if (result && result.success) {
                userSpace.isLoggedIn = true;
                userSpace.username = result.username;
                console.log('WE DID IT!');
            }
            else if (result && result.success === false) {
                this.resetForm();
                 
                alert(result.msg);
                console.log('bad credentials maybe?');
            }


        } catch (e) {
            console.log(e);
            console.log('We need to reset the form. Unobvious error');
            this.resetForm();
        }

    }

    render() {
        return (
            
            <React.Fragment style={{ minHeight: window.innerHeight - 120 }}>
                <Header />

                <div className="loginForm">

                    <h3>Sign In</h3>


                    <InputField type='text'
                        placeholder='Username'
                        value={this.state.username ? this.state.username : ''}
                        onChange={(val) => this.setInputValue('username', val)}
            
                    />
                   
                    <InputField 
                    type='text'
                        placeholder='Password'
                        value={this.state.password ? this.state.password : ''}
                        onChange={(val) => this.setInputValue('password', val)}
                        

                    /> 
                    
        
                   
                    <SubmitButton
                        text='Login'
                        disabled={this.state.buttonDisabled}
                        onClick={() => this.doLogin()}
                    />



                </div>

            </React.Fragment>

        );
    }
}