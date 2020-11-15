import React, { useState, useEffect } from 'react';
import { gql, useLazyQuery } from '@apollo/client';
import DocumentTitle from "react-document-title";
import { Nav } from "../components";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";

const LOGIN = gql`
  query login($email: String, $password: String){
    login(user: { email: $email, password: $password}){
      token
    }
  }
`;

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, { data }] = useLazyQuery(LOGIN);

  useEffect(() => {
    if (data) { localStorage.setItem('token', data.login.token) }
  }, [data]);

  return (
    <DocumentTitle title="Play Along | Login">
      <div className="app">
        <Nav />
        <div className="container">
          <div className="register">
            <form className="form"
              onSubmit={e => {
                e.preventDefault();
                login({ variables: { email: email, password: password } });
              }}>
              <div className="form-control">
                <span>E-mail*</span>
                <input
                  onChange={e => setEmail(e.target.value)} required />
              </div>
              <div className="form-control">
                <span>Wachtwoord*</span>
                <input
                  onChange={e => setPassword(e.target.value)} required />
              </div>
              <button type="submit" ></button>
              <Link to="/admin">Login</Link>
            </form>
          </div>
        </div>
        <div className="footer">
          <p>© copyright 2020 by Alec Meganck</p>
        </div>
      </div>
    </DocumentTitle>
  )
}

export default Login;