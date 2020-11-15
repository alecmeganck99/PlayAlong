import React, { useEffect, useState } from "react";
import DocumentTitle from "react-document-title";
import { Nav } from "../components";
import { useQuery, gql, useLazyQuery } from '@apollo/client';
import { Link } from "react-router-dom";

import "../css/App.css";

import bag from "../images/add-to-cart.svg";

const EXCHANGE_GAMES = gql`
  query GetGames {
    games {
      id
      title
      price
      thumbnailUrl
      age
    }
  }
`;

const GAMES_BY_AGE = gql`
  query ageFilter($age: String){
    ageFilter(age: $age) {
      id
      title
      price
      thumbnailUrl
      age
    }
  }
`


function Speelgoed() {
  const { loading, data } = useQuery(EXCHANGE_GAMES);
  const [getAge, params] = useLazyQuery(GAMES_BY_AGE);

  useEffect(() => {
    if (params.data) {
      console.log(params.data.ageFilter)
    }
  }, [params])

  if (loading) return <p>Loading ...</p>;

  return (
    <DocumentTitle title="Play Along | Speelgoed">
      <div className="app">
        <Nav />
        <div className="webshop">
          <div className="webshop__filter">
            {/* <p>Alle jaren</p> */}
            <p onClick={() => getAge({ variables: { age: "2 tot 6 jaar" } })}>2-6 jaar</p>
            <p onClick={() => getAge({ variables: { age: "6 tot 12 jaar" } })}>6-12 jaar</p>
            <p onClick={() => getAge({ variables: { age: "12 tot 18 jaar" } })}>12-18 jaar</p>
            <p onClick={() => getAge({ variables: { age: "+18 jaar" } })}>+18 jaar</p>
          </div>
          <div className="webshop__games">

            {params.data ?
              params.data.ageFilter.map(game => (
                <Link to={`speelgoed/${game.id}`}>
                  <div className="game" key={game.id}>
                    <div className="game__img">
                      <img src={game.thumbnailUrl} />
                    </div>
                    <div className="game__info">
                      <div className="txt">
                        <p className="txt__title">{game.title}</p>
                        <p className="txt__price">€ {game.price}</p>
                      </div>
                      {/* <div className="cart">
                        <img src={bag} />
                      </div> */}
                    </div>
                  </div>
                </Link>
              ))
              :
              data.games.map(game => (
                <Link to={`speelgoed/${game.id}`}>
                  <div className="game" key={game.id}>
                    <div className="game__img">
                      <img src={game.thumbnailUrl} />
                    </div>
                    <div className="game__info">
                      <div className="txt">
                        <p className="txt__title">{game.title}</p>
                        <p className="txt__price">€ {game.price}</p>
                      </div>
                      {/* <div className="cart">
                        <img src={bag} />
                      </div> */}
                    </div>
                  </div>
                </Link>
              ))
            }

          </div>
        </div>
        <div className="footer">
          <p>© copyright 2020 by Alec Meganck</p>
        </div>
      </div>
    </DocumentTitle>
  );
}

export default Speelgoed;
