import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { users, seeds } from '../../data/mockData'
import SeedCards from '../SeedIndex/SeedIndex'

import './SeedCard.css'

const SeedCard = ( {seedCards} ) => {

  return (
    <div className='seed-container'>
      <div>{seedCards} </div>
    </div>
  )
}

export default SeedCard;
