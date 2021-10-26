import { useEffect, useState } from 'react'
import JournalCard from '../JournalCard/JournalCard'
import JournalForm from '../JournalForm/JournalForm'
import NavBar from '../NavBar/NavBar'
import './JournalIndex.css'
import { useQuery } from '@apollo/client'
import Error from '../Error/Error'
import { LOAD_SELECTED_USER } from '../../GraphQL/Queries'

const JournalIndex = ( { currentUserID } ) => {
  const [showForm, setShowForm] = useState(false)
  const [userPersonalInfo, setUserPersonalInfo] = useState({})
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
      setUserPersonalInfo({
        firstName: data.user.firstName,
        lastName: data.user.lastName,
        userCity: data.user.city,
        userState: data.user.state})
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
       <NavBar userPersonalInfo={userPersonalInfo}/>
      <div className='journal-index'>
        {/*<div>{`Hello, ${users.firstName}`} </div>*/}
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
