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
          maxLength='50'
          placeholder='First Name'
          name='firstName'
          onChange={e => setUserFirstName(e.target.value)}
          className='input-signup'
        />
        <input
          type='text'
          maxLength='50'
          placeholder='Last Name'
          name='lastName'
          onChange={e => setUserLastName(e.target.value)}
          className='input-signup'
        />
        <input
          type='text'
          maxLength='50'
          placeholder='City'
          name='city'
          onChange={e => setUserCity(e.target.value)}
          className='input-signup'
        />
        <StateList handleLocationChange={handleLocationChange}/>
        <textarea
          type='text'
          maxLength='50'
          placeholder='Intentions (short blurb)'
          name='intentions'
          onChange={e => setUserIntentions(e.target.value)}
          className='input-intentions'
          resize='none'
        />
      </div>
    </div>
  )
}

export default SignUp