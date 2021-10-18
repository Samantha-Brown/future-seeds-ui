import Home from '../Home/Home';
import { Route, Switch } from 'react-router'
import './App.css';
import SignUp from '../SignUp/SignUp';
import LogIn from '../LogIn/LogIn';
import SeedIndex from '../SeedIndex/SeedIndex'

import { useState } from 'react'

const App = () => {
  const [currentUser, setCurrentUser] = useState('')

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
      </Switch>
    </main>
  )
}

export default App
