import { useForm } from "react-hook-form";
import './SeedForm.css'
import SeedIndex from '../SeedIndex/SeedIndex'
import { CREATE_SEED_MUTATION } from '../../GraphQL/Mutations'
import { useMutation } from '@apollo/client'

const SeedForm = ( { currentUserID, handleChange }) => {
const { register, handleSubmit, watch, formState: { errors } } = useForm();

console.log(currentUserID)


const [createSeed, { error }] = useMutation(CREATE_SEED_MUTATION)

const onSubmit = (data) => {
  createSeed({
    variables: {
      name: data.name,
      plantingDepth: data.plantingDepth,
      timeToHarvest: data.timeToHarvest,
      datePlanted: data.datePlanted,
      daysToGerminate: data.daysToGerminate,
      expectedPlantHeight: data.expectedPlantHeight,
      notes: data.notes,
      sunExposure: data.sunExposure,
      userId: currentUserID
   }
  })
  // handleChange(data)
  console.log('onsubmit', typeof(currentUserID))
}

if (error) {
    console.log(error)
  }




  return (
    <div className='seed-form-container'>
      <form className='seed-form' onSubmit={ handleSubmit(onSubmit) }>
        <h1 className='form-header'>New Seed Form</h1>
        <input placeholder='Seed Name' className='input-seeds' { ...register('name') } />
        <input placeholder='Planting Depth' className='input-seeds' { ...register('plantingDepth') } />
        <input placeholder='Date Planted' className='input-seeds' { ...register('datePlanted') } />
        <input placeholder='Days to Germinate' className='input-seeds' { ...register('daysToGerminate') } />
        <input placeholder='Plant Height' className='input-seeds' { ...register('expectedPlantHeight') } />
        <select className='input-seeds' { ...register('sunExposure') }>
          <option value=''>Select...</option>
          <option value='Full sun'>Full Sun</option>
          <option value='Partial sun'>Partial Sun</option>
          <option value='Full shade'>Full Shade</option>
          <option value='Unknown'>Unknown</option>
        </select>
        <input placeholder='Time to Harvest' className='input-seeds' {...register('timeToHarvest')} />
        <input placeholder='Notes' className='input-seeds input-notes' {...register('notes')} />
        <input type='submit' className='signup-btn' />
      </form>
    </div>
  )
}

export default SeedForm;
