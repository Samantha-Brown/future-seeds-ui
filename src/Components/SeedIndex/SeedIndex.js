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
      setUserSeeds(data)
    }
  })

  // const seedCards = userSeeds.map(userSeeds => {
  //   return (
  //     <div className='seed-card' key={userSeeds.id}>
  //       <h1 className='seed-title'>{userSeeds.name}</h1>
  //       <div className='noise'></div>
  //       <div className='plant-info'>
  //         <img className='plant-image' src={plantImage} alt='green plant with pink background' />
  //         <div className='plant-text'>
  //           <ul>{`Plant ${userSeeds.planting_depth} inches deep`}</ul>
  //           <ul>{`${userSeeds.days_to_germinate} days to germinate`}</ul>
  //           <ul>{`${userSeeds.expected_plant_height} inches tall`}</ul>
  //           <ul>{`${userSeeds.sun_exposure} sun`}</ul>
  //           <ul>{`${userSeeds.time_to_harvest} Days to harvest`}</ul>
  //           <div className='notes'>
  //             <ul>Notes:</ul>
  //             <ul>{userSeeds.notes}</ul>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   )
  // })

  return (
    <div>
    <NavBar/>
    {/* <div className='seed-index'>
      <div>
      <div>{`Hello, ${userDetails.first_name}`} </div>

      </div>
      <button onClick= {() => setShowForm(true)}>New Card</button>
      {showForm && <div>
        <SeedForm />
        </div>}
      <SeedCard
        seedCards={seedCards}
        />
    </div> */}
    </div>
  )
}

export default SeedIndex;
