import { useState } from 'react'
import StateList from '../StateList/StateList'
import './SignUp.css'

const SignUp = () => {
  const [userFirstName, setUserFirstName] = useState('')
  const [userLastName, setUserLastName] = useState('')
  const [userCity, setUserCity] = useState('')
  const [userState, setUserState] = useState('AL')
  const [userIntentions, setUserIntentions] = useState('')

  const handleLocationChange = (location) => {
    setUserState(location)
  }


  return (
    <div className='signup-container'>
      <div className='input-container'>
        <input
          type='text'
          placeholder='First Name'
          name='firstName'
          onChange={e => setUserFirstName(e.target.value)}
        />
        <input
          type='text'
          placeholder='Last Name'
          name='lastName'
          onChange={e => setUserLastName(e.target.value)}
        />
        <input
          type='text'
          placeholder='City'
          name='city'
          onChange={e => setUserCity(e.target.value)}
        />
        <StateList handleLocationChange={handleLocationChange}/>
        <input
          type='text'
          placeholder='Intentions (short blurb)'
          name='intentions'
          onChange={e => setUserIntentions(e.target.value)}
        />
      </div>
    </div>
  )
}

export default SignUp