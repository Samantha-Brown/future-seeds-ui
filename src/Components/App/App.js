import Home from '../Home/Home';
import SignUp from '../SignUp/SignUp';
import LogIn from '../LogIn/LogIn';
import SeedIndex from '../SeedIndex/SeedIndex';
import Error from '../Error/Error';
import JournalIndex from '../JournalIndex/JournalIndex';
import { Route, Switch } from 'react-router';
import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { LOAD_ALL_USERS } from '../../GraphQL/Queries';
import './App.css';

const App = () => {
  const [currentUserID, setCurrentUserID] = useState(null);
  const [usersList, setUsersList] = useState([]);
  const { error, loading, data } = useQuery(LOAD_ALL_USERS);

  useEffect(() => {
    if (data) {
      setUsersList(data);
    }
  }, [data, currentUserID]);

  const handleChange = (userID) => {
    setCurrentUserID(userID);
  };

  if (loading) return <p>Loading ...</p>;
  if (error) return <Error />;

  return (
    <main>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/signup/" component={ SignUp } />
        <Route exact path="/login/">
          <LogIn
            usersList={ usersList }
            currentUserID={ currentUserID }
            handleChange={ handleChange }
          />
        </Route>
        <Route exact path="/seeds">
          <SeedIndex currentUserID={ currentUserID } />
        </Route>
        <Route exact path="/journal">
          <JournalIndex currentUserID={ currentUserID } />
        </Route>
      </Switch>
    </main>
  );
};

export default App;
