import React from 'react';
import { loginUser } from '../lib/auth';
import Router from 'next/router';


class LoginForm extends React.Component {
    state = {
        email: 'Sincere@april.biz',
        password: 'hildegard.org',
        error: '',
        isLoading: 'false'
    };

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = event => {
        const { email, password } = this.state;

        event.preventDefault();
        this.setState({ error: '', isLoading: true })
        loginUser(email, password).then(() => {
            Router.push('/profile')
        })
        .catch(this.showError)
    };

    showError = err => {
        console.error(err);
        const error = err.response && err.response.data || err.message;
        this.setState({ error, isLoading: false });
    }
    
    render() {
        const { email, password, error, isLoading } = this.state;
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input 
                type="email"
                name="email" 
                placeholder="email"
                value={email}
                onChange={this.handleChange}
                 /></div>
                <div><input 
                type="password"
                name="password" 
                placeholder="password"
                value={password}
                onChange={this.handleChange}
                 />
                 </div>
                <button diasbled={isLoading} type="submit">
                {!isLoading ? "Sending" : "Submit"}
                </button>
               {error && <div>{error}</div>} 
            </form>

            <style jsx>
                {`

                form {
                    text-align: center;
                }

                input {
                    margin-bottom: 0.5em;
                }

                button {
                    margin: auto;
                    margin-top: 1em;
                    background-color: black;
                    color: white;
                    padding-left: 1em;
                    padding-right: 1em;
                    padding-top: 0.5em;
                    padding-bottom: 0.5em;
                    border-style: none;
                    border-radius: 5px;
                    transition: transform .2s; 
                }

                button:hover {
                    transform: scale(1.2); 
                }
                
                `}
            </style>

            </div>

        );
    }
}

export default LoginForm;