import { useForm } from "react-hook-form";
import { CREATE_SEED_MUTATION } from "../../GraphQL/Mutations";
import { useMutation } from "@apollo/client";
import './SeedForm.css'

const SeedForm = ({ userId, handleChange}) => {
  const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();

  const [createSeed, { error }] = useMutation(CREATE_SEED_MUTATION)

  const onSubmit = (data, e) => {
    createSeed({
      variables: {
        name: data.name,
        plantingDepth: data.plantingDepth,
        daysToGerminate: data.daysToGerminate,
        timeToHarvest: data.timeToHarvest,
        datePlanted: data.datePlanted,
        sunExposure: data.sunExposure,
        expectedPlantHeight: data.expectedPlantHeight,
        notes: data.notes,
        userId: userId
      }
    })
    handleChange(data)
    e.target.reset();
  }
  if (error) {
    console.log(error)
  }

  return (
    <div className='seed-form-container'>
      <form className='seed-form' onSubmit={handleSubmit(onSubmit)}>
        <h1 className='form-header'>New Seed Form</h1>
        <input placeholder='Seed Name' className='input-seeds' { ...register('name') } required/>
        <input type="date" className='input-seeds' { ...register('datePlanted') } required/>
        <input placeholder='Planting Depth' className='input-seeds' { ...register('plantingDepth') } required/>
        <input placeholder='Days to Germinate' className='input-seeds' { ...register('daysToGerminate') } required/>
        <input placeholder='Plant Height' className='input-seeds' { ...register('expectedPlantHeight') } required/>
        <select className='input-seeds' { ...register('sunExposure') }>
          <option value=''>Select...</option>
          <option value='Full sun'>Full Sun</option>
          <option value='Part shade'>Part Shade</option>
          <option value='Full shade'>Full Shade</option>
        </select>
        <input placeholder='Time to Harvest' className='input-seeds' {...register('timeToHarvest')} required/>
        <input placeholder='Notes' className='input-seeds input-notes' {...register('notes')} required/>
        <input type='submit' className='new-entry-btn' />
      </form>
    </div>
  )
}

export default SeedForm;
