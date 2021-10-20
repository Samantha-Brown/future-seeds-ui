import { useState } from 'react'
import { users, seeds } from '../../data/mockData'
import SeedCard from '../SeedCard/SeedCard'
import SeedForm from '../SeedForm/SeedForm'
import plantImage from '../../images/caleb-george.jpg'

import './SeedIndex.css'

const SeedIndex = ( {currentUser}) => {
  const [showForm, setShowForm] = useState(false)
  const userDetails = users.find(user => user.id === Number(currentUser))
  const userSeeds = seeds.filter(seed => seed.user_id === Number(currentUser))

  const seedCards = userSeeds.map(userSeeds => {
    return (
      <div className='seed-card' key={userSeeds.id}>
        <h1 className='seed-title'>{userSeeds.name}</h1>
        <div className='noise'></div>
        <div className='plant-info'>
          <img className='plant-image' src={plantImage} alt='green plant with pink background' />
          <div className='plant-text'>
            <ul>{`Plant ${userSeeds.planting_depth} inches deep`}</ul>
            <ul>{`${userSeeds.days_to_germinate} days to germinate`}</ul>
            <ul>{`${userSeeds.expected_plant_height} inches tall`}</ul>
            <ul>{`${userSeeds.sun_exposure} sun`}</ul>
            <ul>{`${userSeeds.time_to_harvest} Days to harvest`}</ul>
            <div className='notes'>
              <ul>Notes:</ul>
              <ul>{userSeeds.notes}</ul>
            </div>
          </div>
        </div>
      </div>
    )
  })

  return (
    <div className='seed-index'>
      <div>{`Hello, ${userDetails.first_name}`} </div>
      <button onClick= {() => setShowForm(true)}>New Card</button>
      {showForm && <div>
        <SeedForm />
        </div>}
      <SeedCard
        seedCards={seedCards}
        />
    </div>
  )
}

export default SeedIndex;
