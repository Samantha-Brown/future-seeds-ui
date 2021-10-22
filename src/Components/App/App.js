import Home from '../Home/Home';
import { Route, Switch } from 'react-router';
import './App.css';
import SignUp from '../SignUp/SignUp';
import LogIn from '../LogIn/LogIn';
import SeedIndex from '../SeedIndex/SeedIndex';
import JournalIndex from '../JournalIndex/JournalIndex';

import { useState, useEffect } from 'react'

import { useQuery, gql } from '@apollo/client';
import { LOAD_ALL_USERS } from '../../GraphQL/Queries'

const App = () => {
  const [currentUser, setCurrentUser] = useState('')
  const [usersList, setUsersList] = useState([])
  const { error, loading, data } = useQuery(LOAD_ALL_USERS)

  useEffect(() => {
    if (data) {
      console.log('graphql', data)
      setUsersList(data)
    }
  }, [data])

  const handleChange = (userID) => {
    setCurrentUser(userID)
  }

  return (
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
  )
}

export default App
