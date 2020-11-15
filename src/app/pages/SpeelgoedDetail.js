import React, { useState, useEffect } from "react";
import DocumentTitle from "react-document-title";
import { useQuery, gql, useMutation } from '@apollo/client';
import { Nav } from "../components";
import { v4 as uuid } from "uuid";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";

import bag from "../images/add-to-cart.svg";

import "../css/App.css";

function addToCart(data) {
  const currentData = JSON.parse(window.localStorage.getItem('cart')) || []
  currentData.push({ ...data, toCartId: uuid() })
  window.localStorage.setItem("cart", JSON.stringify(currentData))
}

function SpeelgoedDetail({ match }) {

  const itemId = match.params.id;
  const itemIdString = JSON.stringify(itemId);

  const EXCHANGE_GAMEBYID = gql`
  query GetGame {
      game(id: ${itemIdString}) {
        id
        title
        thumbnailUrl
        description
        age
        price
        imgUrl
        imgUrl2
        extentions {
          author
          description
        }
      }
    }
  `;

  const ADDEXTENTION = gql`
  mutation addExtentionToGame ($author: String!, $description: String!) {
    addExtentionToGame(
    gameId: ${itemIdString}
    extention: { author: $author, description: $description }
  ){
    extentions {
      author
      description
    }
      }
    }
  `;

  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [addExtention, params] = useMutation(ADDEXTENTION);
  useEffect(() => {
    if (params) { }
  }, [params]);

  const { loading, data, refetch } = useQuery(EXCHANGE_GAMEBYID);
  if (loading) return <p>Loading ...</p>;
  console.log(data);



  return (
    <DocumentTitle title="Play Along | SpeelgoedDetail">
      <div className="app">
        <Nav />
        <div className="container">
          <div className="game-detail">
            <div className="imgbox">
              <img src={data.game.thumbnailUrl} />
            </div>
            <div className="txtbox">
              <p className="title">{data.game.title}</p>
              <p className="desc">{data.game.description}</p>
              <div className="cat">
                <p className="age">{data.game.age}</p>
                <p className="price">€ {data.game.price}</p>
              </div>
              <div className="shopping">
                <img src={bag} onClick={() => { addToCart(data) }} />
              </div>
              <div className="imgs">
                <img src={data.game.imgUrl} />
                <img src={data.game.imgUrl2} />
              </div>
            </div>
          </div>

          {data.game.extentions.map(comment => (
            <div className="game-detail margin">
              <div className="txtbox">
                <p className="price">{comment.author}:</p>
                <p className="price">{comment.description}</p>
              </div>
            </div>
          ))}
          <div>
            <div className="register">
              <form className="form"
                onSubmit={e => {
                  e.preventDefault();
                  addExtention({ variables: { author: author, description: description } });
                  refetch();
                }}
              >
                <div className="form-control">
                  <span>Naam*</span>
                  <input
                    onChange={e => setAuthor(e.target.value)}
                  />
                </div>
                <div className="form-control">
                  <span>Beschrijving*</span>
                  <textarea
                    onChange={e => setDescription(e.target.value)}
                  />
                </div>
                <button type="submit">Voeg comment toe</button>
              </form>
            </div>
          </div>
        </div>
        <div className="footer">
          <p>© copyright 2020 by Alec Meganck</p>
        </div>
      </div>
    </DocumentTitle>
  );
}

export default SpeelgoedDetail;
