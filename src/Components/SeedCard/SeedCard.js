import './SeedCard.css'
import flower from '../../images/flower.png'

const SeedCard = ({ userSeeds }) => {

  const seedCards = userSeeds.map(userSeeds => {
    return (
      <div className='seed-card' key={ userSeeds.id }>
        <h1 className='seed-title'>{ userSeeds.name }</h1>
        <img className='plant-image' src={ flower } alt='green plant with pink background' />
        <div className='plant-info'>
          <div className='plant-text'>
            <ul>{`Plant ${ userSeeds.plantingDepth } deep`}</ul>
            <ul>{`${ userSeeds.daysToGerminate } to germinate`}</ul>
            <ul>{`${ userSeeds.expectedPlantHeight } tall`}</ul>
            <ul>{`${ userSeeds.sunExposure }`}</ul>
            <ul>{`${ userSeeds.timeToHarvest } to harvest`}</ul>
            <div className='notes'>
              <ul className='notes-text'>Notes:</ul>
              <ul>{ userSeeds.notes }</ul>
            </div>
          </div>
        </div>
      </div>
    )
  })

  return (
    <>
      <div className='seed-container'>{ seedCards }</div>
    </>
  )
};

export default SeedCard;
