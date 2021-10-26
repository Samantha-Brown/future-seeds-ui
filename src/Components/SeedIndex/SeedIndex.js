import { useEffect, useState } from 'react'
import SeedCard from '../SeedCard/SeedCard'
import SeedForm from '../SeedForm/SeedForm'
import NavBar from '../NavBar/NavBar'
import Error from '../Error/Error'
import { useQuery } from '@apollo/client'
import { LOAD_SELECTED_USER } from '../../GraphQL/Queries'
import './SeedIndex.css'

const SeedIndex = ({ currentUserID }) => {
  const [showForm, setShowForm] = useState(false)
  const [userSeeds, setUserSeeds] = useState(null)
  const [userPersonalInfo, setUserPersonalInfo] = useState({})

  const { error, loading, data } = useQuery(
    LOAD_SELECTED_USER, { variables: {id: currentUserID} });

  useEffect(() => {
    if (data) {
      setUserSeeds(data.user.seeds)
      setUserPersonalInfo({
        firstName: data.user.firstName,
        lastName: data.user.lastName,
        userCity: data.user.city,
        userState: data.user.state})
    }
  }, [data]);

  if (loading) return <p>Loading ...</p>;
  if (error) {
    return(
      <>
        `Error! ${error}`
        <Error />
      </>
    )
  };

  return (
    <div className='main-seed-div'>
      <NavBar userPersonalInfo={ userPersonalInfo }/>
          { !showForm && <button className='show-form' onClick={ () => setShowForm(true) }>New Seed</button>}
        <div className='seed-index'>
          { showForm && <div>
            <SeedForm
              showForm={ showForm }
              />
              </div> }
              <h1 className='form-header seed-header'> Collected Seeds:</h1>
        { userSeeds && <SeedCard
            userSeeds={ userSeeds }
          /> }
      </div>
    </div>
  )
};

export default SeedIndex;
