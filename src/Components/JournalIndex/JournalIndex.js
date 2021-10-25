import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { users, journalEntries } from '../../data/mockData'
import JournalCard from '../JournalCard/JournalCard'
import JournalForm from '../JournalForm/JournalForm'
import NavBar from '../NavBar/NavBar'
import './JournalIndex.css'
import { useQuery } from '@apollo/client'
import { LOAD_SELECTED_USER } from '../../GraphQL/Queries'

const JournalIndex = ( { currentUserID } ) => {
  const [showForm, setShowForm] = useState(false)
  const [userJournals, setUserJournals] = useState(null)
  const { error2, loading2, data } = useQuery(
    LOAD_SELECTED_USER, { variables: {id: currentUserID}
  )

  useEffect(() => {
    if (data) {
      setUserJournals(data.user.journalEntries)
    }
  }, [data])

  return (
    <div>
      <NavBar/>
      <div className='journal-index'>
        <div>{ `Hello, ${users.firstName}` }</div>
        <button onClick= { () => setShowForm(true) }>Add New Journal Entry</button>
        { showForm && <div> <JournalForm /> </div> }
        { userJournals && <JournalCard
          userJournals={userJournals}
          /> }
      </div>
    </div>
  )
}

export default JournalIndex
