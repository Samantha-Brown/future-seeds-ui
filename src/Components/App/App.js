import Home from '../Home/Home';
import { Route, Switch } from 'react-router';
import './App.css';
import SignUp from '../SignUp/SignUp';
import LogIn from '../LogIn/LogIn';
import SeedIndex from '../SeedIndex/SeedIndex';
import JournalIndex from '../JournalIndex/JournalIndex';

import { useState, useEffect } from 'react'

import { useQuery, gql} from '@apollo/client';
import { LOAD_ALL_USERS, LOAD_SELECTED_USER } from '../../GraphQL/Queries'

const App = () => {
  const [currentUserID, setCurrentUserID] = useState(null)
  const [usersList, setUsersList] = useState([])
  const [selectedUser, setSelectedUser] = useState(null)
  const { error, loading, data } = useQuery(LOAD_ALL_USERS)

  // const { error2, loading2, data } = useQuery(
  //   LOAD_SELECTED_USER, 
  //   { 
  //     variables: {id: 12}
  //   }
  // )


  useEffect(() => {
    if (data) {
      setUsersList(data)
    }  
  }, [data, currentUserID])

  const handleChange = (userID) => {
    setCurrentUserID(userID)
  }

  return (
    <main>
      <Switch>
        <Route exact path='/' component={ Home } />
        <Route exact path='/signup/' component= { SignUp }/>
        <Route exact path='/login/'>
          <LogIn
            usersList={ usersList }
            currentUserID={ currentUserID }
            handleChange = {handleChange }
            />
          </Route>
        <Route exact path='/seeds'>
          <SeedIndex
            currentUserID={ currentUserID }
            />
        </Route>
        <Route exact path='/journal'>
          <JournalIndex
            selectedUser={ selectedUser }
            />
        </Route>
      </Switch>
    </main>
  )
}

export default App
