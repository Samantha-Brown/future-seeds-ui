import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { users, journalEntries } from '../../data/mockData'
import JournalCard from '../JournalCard/JournalCard'
import './JournalIndex.css'

const JournalIndex = ( { currentUser } ) => {

  const userDetails = users.find(user => user.id === Number(currentUser))

  const userJournalEntries = journalEntries.filter(entry => entry.user_id ===Number(currentUser))

  const journalCards = userJournalEntries.map(journalEntries => {
    return (
      <div className='journal-card' key={userJournalEntries.id}>
        <h1>{journalEntries.date}</h1>
        <p>{journalEntries.description}</p>
      </div>
    )
  })

  return (
    <div className='journal-index'>
      <div>{`Hello, ${userDetails.first_name}`} </div>
      <button>Add new entry</button>
      <JournalCard
        journalCards={journalCards}
        />
    </div>
  )
}

export default JournalIndex
