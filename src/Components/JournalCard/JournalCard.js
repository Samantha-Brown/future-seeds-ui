import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { users, journalEntries } from '../../data/mockData'
import JournalCards from '../JournalIndex/JournalIndex'

import './JournalCard.css'

const JournalCard = ( { userJournals } ) => {

  const journalCards = userJournals.map(journalEntries => {
    return (
      <div className='journal-card' key={userJournals.id}>
        <h1>{journalEntries.date}</h1>
        <p>{journalEntries.description}</p>
      </div>
    )
  })

  return (
    <div className='journal-container'>
      <div>{journalCards} </div>
    </div>
  )
}

export default JournalCard;
