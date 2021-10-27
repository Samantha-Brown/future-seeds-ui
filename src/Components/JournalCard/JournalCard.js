import './JournalCard.css'
const dayjs = require('dayjs');

const JournalCard = ({ userJournals }) => {

  const journalCards = userJournals.map(journalEntries => {
   
    return (
      <div className='all-journal-cards' key={ journalEntries.id}>
        <div className='journal-card' >
          <h1>{ dayjs(journalEntries.date).format('MMMM DD, YYYY') }</h1>
          <p>{ journalEntries.description }</p>
        </div>
      </div>
    )
  })

  return (
    <div className='journal-container'>
      <div>{ journalCards } </div>
    </div>
  )
}

export default JournalCard;
