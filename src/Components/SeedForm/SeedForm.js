import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import { users, seeds } from '../../data/mockData'
import SeedCard from '../SeedCard/SeedCard'
import './SeedForm.css'

const SeedForm = () => {
const { register, handleSubmit, watch, formState: { errors } } = useForm();
const onSubmit = data => console.log(data)

  return (
    <div className='seed-form'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder='Seed Name' {...register('name')} />
        <input placeholder='Planting Depth' {...register('planting_depth')} />
        <input placeholder='Days to Germinate' {...register('days_to_germinate')} />
        <input placeholder='Plant Height' {...register('expected_plant_height')} />
        <select {...register('sun_exposure')}>
          <option value=''>Select...</option>
          <option value='full_sun'>Full Sun</option>
          <option value='partial_sun'>Partial Sun</option>
          <option value='full_shade'>Full Shade</option>
        </select>
        <input placeholder='Time to Harvest' {...register('time_to_harvest')} />
        <input placeholder='Notes' {...register('notes')} />
        <input type='submit' />
      </form>
    </div>
  )
}

export default SeedForm;



// <input
//   type='text'
//   placeholder='Seed Name'
//   name='name'
//   />
// <input
//   type='text'
//   placeholder='Planting Depth'
//   name='planting_depth'
//   />
// <input
//   type='text'
//   placeholder='Days to Germinate'
//   name='days_to_germinate'
//   />
// <input
//   type='text'
//   placeholder='Plant Height'
//   name='expected_plant_height'
//   />
