import React, { useEffect } from "react";
import { NetworkStatus } from '@apollo/client';
import { useError } from '../Hooks';
import { gql, useQuery, useLazyQuery } from '@apollo/client';
import { FRAGMENT_USER_EMAIL } from '../Fragments/gqlFragments';
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import { Nav } from "../components";
import DocumentTitle from "react-document-title";

import "../css/App.css";

const USERS = gql`
  {
    users {
      ...UserEmail
      password
    }
  }
  ${FRAGMENT_USER_EMAIL}
`
const GET_USER_PASSWORD = gql`
  query user($id: ID) {
    user(id: $id) {
      password
    }
  }
`

function Admin() {

  const [handleGqlError] = useError();
  const { loading, error, data, refetch, networkStatus } = useQuery(USERS, {
    onError: handleGqlError,
    fetchPolicy: "cache-first", // https://www.apollographql.com/docs/react/data/queries/#supported-fetch-policies
    notifyOnNetworkStatusChange: true,
    // pollInterval: 500,
  });
  const [getUser, lazyQueryParams] = useLazyQuery(GET_USER_PASSWORD);

  useEffect(() => {
    if (lazyQueryParams.data && lazyQueryParams.data.user) {
      console.log(lazyQueryParams.data.user.password);
    }
  }, [lazyQueryParams.data])

  if (networkStatus === NetworkStatus.refetch) return 'Refetching!';
  if (loading) return 'loading...';
  if (error) return `ERROR: ${error.message}`;
  // if(lazyQueryParams.loading) return 'loading user...';

  return (
    <DocumentTitle title="Play Along | Admin">
      <div className="app">
        <Nav />
        <div className="container">
          <div className="admin">
            <div className="panel">
              <Link to="/create">Voeg spel toe</Link>
            </div>
            <div className="panel">
              <Link to="/registreer">Registreer</Link>
            </div>
            <div className="panel red">
              <Link to="/completelogout">Uitloggen</Link>
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

export default Admin;
