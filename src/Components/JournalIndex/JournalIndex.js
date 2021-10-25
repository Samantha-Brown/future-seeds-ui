import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { users, journalEntries } from '../../data/mockData'
import JournalCard from '../JournalCard/JournalCard'
import JournalForm from '../JournalForm/JournalForm'
import NavBar from '../NavBar/NavBar'
import './JournalIndex.css'
import { useQuery } from '@apollo/client'
import Error from '../Error/Error'
import { LOAD_SELECTED_USER } from '../../GraphQL/Queries'

const JournalIndex = ( { currentUserID } ) => {
  //const userDetails = users.find(user => user.id === Number(currentUser))
  const [showForm, setShowForm] = useState(false)
  //const userJournalEntries = journalEntries.filter(entry => entry.user_id ===Number(currentUser))

  const [userJournals, setUserJournals] = useState(null)
  const { error, loading, data } = useQuery(
    LOAD_SELECTED_USER,
    {
      variables: {id: currentUserID}
    }
  )

  useEffect(() => {
    if (data) {
      setUserJournals(data.user.journalEntries)
    }
  }, [data])

  if (loading) return <p>Loading ...</p>;
  if (error) {
    return(
      <>
        `Error! ${error}`
        <Error />
      </>
    )
  };

  return (
    <div>
      <NavBar/>
      <div className='journal-index'>
        <div>{`Hello, ${users.firstName}`} </div>
        <button onClick= {() => setShowForm(true)}>Add New Journal Entry</button>
        {showForm && <div>
        <JournalForm />
        </div>}
        { userJournals && <JournalCard
          userJournals={userJournals}
          />}
      </div>
    </div>
  )
}

export default JournalIndex
