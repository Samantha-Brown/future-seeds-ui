import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { users, journalEntries } from '../../data/mockData'
import JournalCards from '../JournalIndex/JournalIndex'

import './JournalCard.css'

const JournalCard = ( {journalCards} ) => {

  return (
    <div className='journal-container'>
      <div>{journalCards} </div>
    </div>
  )
}

export default JournalCard;
