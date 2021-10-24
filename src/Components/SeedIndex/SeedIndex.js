import { useEffect, useState } from 'react'
import { users, seeds } from '../../data/mockData'
import SeedCard from '../SeedCard/SeedCard'
import SeedForm from '../SeedForm/SeedForm'
import NavBar from '../NavBar/NavBar'
import plantImage from '../../images/caleb-george.jpg'
import { useQuery } from '@apollo/client'
import { LOAD_SELECTED_USER } from '../../GraphQL/Queries'
import './SeedIndex.css'

const SeedIndex = ( {currentUserID}) => {
  const [showForm, setShowForm] = useState(false)
  // const userDetails = users.find(user => user.id === Number(currentUser))
  // const userSeeds = seeds.filter(seed => seed.user_id === Number(currentUser))

  const [userSeeds, setUserSeeds] = useState(null)
  const { error2, loading2, data } = useQuery(
    LOAD_SELECTED_USER,
    {
      variables: {id: currentUserID}
    }
  )

  useEffect(() => {
    if (data) {
      setUserSeeds(data.user.seeds)
    }
  })
  console.log(userSeeds)

  return (
    <div>
    <NavBar/>
    <div className='seed-index'>
      <button onClick= {() => setShowForm(true)}>New Card</button>
      {showForm && <div>
        <SeedForm />
        </div>}
      { userSeeds && <SeedCard
        userSeeds={ userSeeds }
        /> }
    </div>
    </div>
  )
}

export default SeedIndex;
