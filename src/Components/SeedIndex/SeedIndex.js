import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { users, seeds } from '../../data/mockData'
import SeedCard from '../SeedCard/SeedCard'
import './SeedIndex.css'

const SeedIndex = ( {currentUser}) => {

  const userDetails = users.find(user => user.id === Number(currentUser))

  const userSeeds = seeds.filter(seed => seed.user_id === Number(currentUser))

  const seedCards = userSeeds.map(userSeeds => {
    return (
      <div className='seed-card' key={userSeeds.id}>
        <h1>{userSeeds.name}</h1>
        <ul>{`Plant ${userSeeds.planting_depth} inches deep`}</ul>
        <ul>{`${userSeeds.days_to_germinate} days to germinate`}</ul>
        <ul>{`${userSeeds.expected_plant_height} inches tall`}</ul>
        <ul>{`${userSeeds.sun_exposure} sun`}</ul>
        <ul>{`${userSeeds.time_to_harvest} Days to harvest`}</ul>
        <ul>{` Notes: ${userSeeds.notes}`}</ul>
      </div>
    )
  })

  return (
    <div className='seed-index'>
      <div>{`Hello, ${userDetails.first_name}`} </div>
      <button>New Card</button>
      <SeedCard
        seedCards={seedCards}
        />
    </div>
  )
}

export default SeedIndex;
