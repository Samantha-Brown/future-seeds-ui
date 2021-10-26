import './JournalCard.css'
const dayjs = require('dayjs');

const JournalCard = ({ userJournals, key }) => {

  const journalCards = userJournals.map(journalEntries => {
    return (
      <div className='all-journal-cards'>
      <div className='journal-card' key={ key } >
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
