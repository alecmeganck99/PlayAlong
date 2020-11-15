import React, { useState, useEffect } from 'react';
import { gql, useMutation } from '@apollo/client';
import DocumentTitle from "react-document-title";
import { Nav } from "../components";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";

const REGISTER = gql`
  mutation register($name: String!, $email: String!, $password: String!) {
    register(user: { name: $name, email: $email, password: $password }) {
      id
    }
  }
`;

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [register, { data }] = useMutation(REGISTER);

  useEffect(() => {
    if (data) { console.log(data); }
  }, [data]);

  return (
    <DocumentTitle title="Play Along | Registreer">
      <div className="app">
        <Nav />
        <div className="container">
          <div className="register">
            <form className="form"
              onSubmit={e => {
                e.preventDefault();
                register({ variables: { name: name, email: email, password: password } });
              }}
            >
              <button type="submit"><Link to="/admin">Terug</Link></button>
              <div className="form-control">
                <span>Naam*</span>
                <input
                  onChange={e => setName(e.target.value)} required />
              </div>
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
              <button type="submit"><Link to="/completeregister">Registreer</Link></button>
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

export default Register;