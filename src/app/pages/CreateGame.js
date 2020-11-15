import React, { useState, useEffect } from 'react';
import { gql, useMutation } from '@apollo/client';
import DocumentTitle from "react-document-title";
import { Nav } from "../components";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";

const CREATE = gql`
  mutation addGame($title: String!, $description: String!, $price: String!, $thumbnailUrl: String!, $imgUrl: String!, $imgUrl2: String!, $age: String!){
    addGame(game: { title: $title, description: $description, price: $price, thumbnailUrl: $thumbnailUrl, imgUrl: $imgUrl, imgUrl2: $imgUrl2, age: $age }){
      id
    }
  }
`;

function CreateGame() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [thumbnailUrl, setThumbnailUrl] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [imgUrl2, setImgUrl2] = useState('');
  const [age, setAge] = useState('');
  const [create, { data }] = useMutation(CREATE);

  useEffect(() => {
    if (data) { console.log(data); }
  }, [data]);

  return (
    <DocumentTitle title="Play Along | Voeg een spel toe">
      <div className="app">
        <Nav />
        <div className="container">
          <div className="register">
            <form className="form"
              onSubmit={e => {
                e.preventDefault();
                create({ variables: { title: title, description: description, price: price, thumbnailUrl: thumbnailUrl, imgUrl: imgUrl, imgUrl2: imgUrl2, age: age } });
              }}
            >
              <button type="submit"><Link to="/admin">Terug</Link></button>
              <div className="form-control">
                <span>Titel*</span>
                <input
                  onChange={e => setTitle(e.target.value)} />
              </div>
              <div className="form-control">
                <span>Beschrijving*</span>
                <textarea
                  onChange={e => setDescription(e.target.value)} />
              </div>
              <div className="form-control">
                <span>Prijs*</span>
                <input
                  onChange={e => setPrice(e.target.value)} />
              </div>
              <div className="form-control">
                <span>Hoofdafbeelding*</span>
                <input
                  onChange={e => setThumbnailUrl(e.target.value)} />
                {/* <input type="file" id="myFile" name="filename" /> */}
              </div>
              <div className="form-control">
                <span>Afbeelding 1*</span>
                <input
                  onChange={e => setImgUrl(e.target.value)} />
              </div>
              <div className="form-control">
                <span>Afbeelding 2*</span>
                <input
                  onChange={e => setImgUrl2(e.target.value)} />
              </div>
              <div className="form-control">
                <span>Leeftijd*</span>
                {/* <input
                  onChange={e => setAge(e.target.value)} placeholder="2 tot 6 jaar" /> */}
                <select id="ages" name="ages" onChange={e => setAge(e.target.value)}>
                  <option value="2 tot 6 jaar">2 tot 6 jaar</option>
                  <option value="6 tot 12 jaar">6 tot 12 jaar</option>
                  <option value="12 tot 18 jaar">12 tot 18 jaar</option>
                  <option value="+18 jaar">+18 jaar</option>
                </select>
              </div>
              <button type="submit"><Link to="/completegame">Voeg toe</Link></button>
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

export default CreateGame;