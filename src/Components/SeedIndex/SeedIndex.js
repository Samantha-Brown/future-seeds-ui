import { useEffect, useState } from 'react'
import SeedCard from '../SeedCard/SeedCard'
import SeedForm from '../SeedForm/SeedForm'
import NavBar from '../NavBar/NavBar'
import { useQuery } from '@apollo/client'
import { LOAD_SELECTED_USER } from '../../GraphQL/Queries'
import './SeedIndex.css'

const SeedIndex = ({ currentUserID }) => {
  const [showForm, setShowForm] = useState(false)
  const [userSeeds, setUserSeeds] = useState(null)

  const { error, loading, data } = useQuery(
    LOAD_SELECTED_USER, { variables: {id: currentUserID} });

  useEffect(() => {
    if (data) {
      setUserSeeds(data.user.seeds)
    }
  }, [data]);

  return (
    <div>
    <NavBar/>
    <div className='seed-index'>
      <button onClick={() => setShowForm(true)}>New Card</button>
      { showForm && <div>
        <SeedForm />
        </div> }
      { userSeeds && <SeedCard
        userSeeds={ userSeeds }
        /> }
    </div>
    </div>
  )
};

export default SeedIndex;
