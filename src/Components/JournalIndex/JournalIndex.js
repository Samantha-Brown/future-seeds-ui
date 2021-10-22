import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { users, journalEntries } from '../../data/mockData'
import JournalCard from '../JournalCard/JournalCard'
import JournalForm from '../JournalForm/JournalForm'
import NavBar from '../NavBar/NavBar'
import './JournalIndex.css'

const JournalIndex = ( { currentUser } ) => {
  const userDetails = users.find(user => user.id === Number(currentUser))
  const [showForm, setShowForm] = useState(false)
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
    <div>
    <NavBar/>
    <div className='journal-index'>
      <div>{`Hello, ${userDetails.first_name}`} </div>
      <button onClick= {() => setShowForm(true)}>Add New Journal Entry</button>
      {showForm && <div>
      <JournalForm />
      </div>}
      <JournalCard
        journalCards={journalCards}
        />
    </div>
    </div>
  )
}
//Needs a submit form functionality next - after BE connection?
export default JournalIndex
