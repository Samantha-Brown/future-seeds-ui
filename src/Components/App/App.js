import Home from '../Home/Home';
import { Route, Switch } from 'react-router'
import './App.css';
import SignUp from '../SignUp/SignUp';
import LogIn from '../LogIn/LogIn';

const App = () => {

  return (
    <main>
      <Switch>
        <Route exact path='/' component={ Home } />
        <Route exact path='/signup/' component= { SignUp }/>
        <Route exact path='/login/' component={ LogIn } />
      </Switch>
    </main>
  )
}

export default App
