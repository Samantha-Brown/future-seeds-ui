import './SeedCard.css'
import plantImage from '../../images/caleb-george.jpg'

const SeedCard = ( { userSeeds } ) => {


const seedCards = userSeeds.map(userSeeds => {
  return (
    <div className='seed-card' key={userSeeds.id}>
      <h1 className='seed-title'>{userSeeds.name}</h1>
      <div className='noise'></div>
      <div className='plant-info'>
        <img className='plant-image' src={plantImage} alt='green plant with pink background' />
        <div className='plant-text'>
          <ul>{`Plant ${userSeeds.plantingDepth} inches deep`}</ul>
          <ul>{`${userSeeds.days_to_germinate} days to germinate`}</ul>
          <ul>{`${userSeeds.expectedPlantHeight} inches tall`}</ul>
          <ul>{`${userSeeds.sunExposure} sun`}</ul>
          <ul>{`${userSeeds.timeToHarvest} Days to harvest`}</ul>
          <div className='notes'>
            <ul>Notes:</ul>
            <ul>{userSeeds.notes}</ul>
          </div>
        </div>
      </div>
    </div>
  )
})

  return (
    <div className='seed-container'>
      <div>{seedCards} </div>
    </div>
  )
}

export default SeedCard;
