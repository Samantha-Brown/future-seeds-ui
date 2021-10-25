import React from 'react';
import ReactDOM from 'react-dom';
import Error from './Components/Error/Error';
import App from './Components/App/App'
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from '@apollo/client';
import { onError } from '@apollo/client/link/error';

const errorLink = onError(({ graphQLErrors, networkError}) => {
  if ( graphQLErrors ) {
    graphQLErrors.map(({ message, location, path }) => {
      return alert(`GraphQL error ${message}`)
    })
  }
})

const link = from([
  errorLink,
  new HttpLink({uri: "https://future-seeds-api.herokuapp.com/graphql"})
])

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
  fetchOptions: {
    mode: 'no-cors',
  }
})

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>,
    document.getElementById('root'));
