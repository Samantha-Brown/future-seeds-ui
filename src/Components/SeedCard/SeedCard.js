import './SeedCard.css'

const SeedCard = ( {seedCards} ) => {

  return (
    <div className='seed-container'>
      <div>{seedCards} </div>
    </div>
  )
}

export default SeedCard;
