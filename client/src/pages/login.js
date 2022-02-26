import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Login = () => {
    const [formState, setFormState] = useState({ username: '', password: '' });
    const [login, { error, data }] = useMutation(LOGIN_USER);
  
    // update state based on form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;
  
        setFormState({
            ...formState,
            [name]: value,
        });
    };

      // submit form
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const { data } = await login({
                variables: { ...formState },
            });

            Auth.login(data.login.token);
        } catch (e) {
            console.error(e);
        }

        // clear form values
        setFormState({
            username: '',
            password: '',
        });
    };

    const renderForm = () => {
        if (data) {
          return (
            <p>
              Success! You may now head{' '}
              <Link to="/">back to the homepage.</Link>
            </p>
          )
        }
        return (
            <form onSubmit={handleFormSubmit} id="login-form" className="card-body">
                <label for="username-input-login">Username:</label>
            <div>
                <input name="username" value={formState.name} onChange={handleChange} type="text" id="username-input-login" />
            </div>
                <label for="password-input-login" className="form-label">Password:</label>
            <div>
                <input name="password" value={formState.password} onChange={handleChange} type="password" id="password-input-login" />
            </div>
            <button type="submit" className="btn" id="login-btn">Log In</button>
            </form>
        );
    };
    
    return (
        <main>
            <div>
                {renderForm()}
                {error && <div>{error.message}</div>}
            </div>
        </main>
    )
}

export default Login;