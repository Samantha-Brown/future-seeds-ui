import { useState } from 'react'
import StateList from '../StateList/StateList'
import './SignUp.css'

const SignUp = () => {
  const [userState, setUserState] = useState('AL')
  const [userFirstName, setUserFirstName] = useState('')
  const [userLastName, setUserLastName] = useState('')
  const [userCity, setUserCity] = useState('')

  const handleLocationChange = (location) => {
    setUserState(location)
  }


  return (
    <div className='signup-container'>
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
    </div>
  )
}

export default SignUp