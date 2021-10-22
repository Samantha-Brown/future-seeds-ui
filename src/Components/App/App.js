import Home from '../Home/Home';
import { Route, Switch } from 'react-router';
import './App.css';
import SignUp from '../SignUp/SignUp';
import LogIn from '../LogIn/LogIn';
import SeedIndex from '../SeedIndex/SeedIndex';
import JournalIndex from '../JournalIndex/JournalIndex';
import { useState } from 'react'

import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from '@apollo/client';
import {onError} from '@apollo/client/link/error'
import { createHttpLink } from '@apollo/client';

const errorLink = onError(({ graphQLErrors, networkError}) => {
  if (graphQLErrors) {
    graphQLErrors.map(({message, location, path}) => {
      alert(`Graphql error ${message}`)
    })
  }
})

const link = from([
  errorLink,
  new HttpLink({uri: "https://future-seeds-api.herokuapp.com/graphql"})
])

// const link = createHttpLink({
//   uri: 'https://future-seeds-api.herokuapp.com/graphql' // This is relative to our Rails API port running on 3000
// });

const client = new ApolloClient ({
  cache: new InMemoryCache(),
  link: link
})

const App = () => {
  const [currentUser, setCurrentUser] = useState('')

  const handleChange = (userID) => {
    setCurrentUser(userID)
  }

  return (
    <ApolloProvider client={client}>
      <main>
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route exact path='/signup/' component= { SignUp }/>
          <Route exact path='/login/'>
            <LogIn
              currentUser={ currentUser }
              handleChange = {handleChange }
              />
            </Route>
          <Route exact path='/seeds'>
            <SeedIndex
              currentUser={ currentUser }
              />
          </Route>
          <Route exact path='/journal'>
            <JournalIndex
              currentUser={ currentUser }
              />
          </Route>
        </Switch>
      </main>
    </ApolloProvider>
  )
}

export default App
