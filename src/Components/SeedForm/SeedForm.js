import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { users, seeds } from '../../data/mockData'
import SeedCard from '../SeedCard/SeedCard'
import './SeedForm.css'

const SeedForm = () => {
const [sunExposure, setSunExposure] = useState('')

  return (
    <div className='seed-form'>
      <form>
        <input
          type='text'
          placeholder='Seed Name'
          name='name'
          />
        <input
          type='text'
          placeholder='Planting Depth'
          name='planting_depth'
          />
        <input
          type='text'
          placeholder='Days to Germinate'
          name='days_to_germinate'
          />
        <input
          type='text'
          placeholder='Plant Height'
          name='expected_plant_height'
          />
        <select>
          <option value=''>Select...</option>
          <option value='full_sun'>Full Sun</option>
          <option value='partial_sun'>Partial Sun</option>
          <option value='full_shade'>Full Shade</option>
          type='text'
          placeholder='Sun Exposure'
          name='sun_exposure'
        </select>
        <input
          type='text'
          placeholder='Time to Harvest'
          name='time_to_harvest'
          />
        <input
          type='text'
          placeholder='Notes'
          name='notes'
          />
        <input type='submit' />
      </form>
    </div>
  )
}

export default SeedForm;
