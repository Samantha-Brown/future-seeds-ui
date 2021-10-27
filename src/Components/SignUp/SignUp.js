import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import StateList from '../StateList/StateList'
import './SignUp.css'
import signUp from '../../images/signup.png'
import { CREATE_USER_MUTATION } from '../../GraphQL/Mutations'
import { useMutation } from '@apollo/client'

const SignUp = ({ handleChange }) => {
  const [userFirstName, setUserFirstName] = useState('')
  const [userLastName, setUserLastName] = useState('')
  const [userCity, setUserCity] = useState('')
  const [userState, setUserState] = useState('AL')
  const [userIntentions, setUserIntentions] = useState('')

  const [createUser, { data, error }] = useMutation(CREATE_USER_MUTATION)

  

  const addUser = () => {
  const user =  createUser({
      variables: {
        firstName: userFirstName,
        lastName: userLastName,
        city: userCity,
        state: userState,
        intentions: userIntentions
      }
    })
    user.then(res => handleChange(res.data.createUser.id))
  }

  useEffect(() => {
    if (data) {
      console.log('mutatedResults: ', data.createUser.id)
    }
  }, [data])

  if (!error) {
    console.log(error)
  }

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
          name='FirstName'
          onChange={e => setUserFirstName(e.target.value)}
          className='input-signup'
        />
        <input
          type='text'
          maxLength='50'
          placeholder='Last Name'
          name='LastName'
          onChange={ e => setUserLastName(e.target.value) }
          className='input-signup'
        />
        <input
          type='text'
          maxLength='50'
          placeholder='City'
          name='City'
          onChange={ e => setUserCity(e.target.value) }
          className='input-signup'
        />
        <StateList handleLocationChange={handleLocationChange}/>
        <textarea
          type='text'
          maxLength='100'
          placeholder='Intentions (short blurb)'
          name='Intentions'
          onChange={e => setUserIntentions(e.target.value)}
          className='input-intentions'
          resize='none'
        />
      </div>
      <Link to='/seeds'>
        <img src={signUp} alt='sign up' className='signup-btn' onClick={ () => { addUser() } }/>
      </Link>
      <Link to='/' style={{ textDecoration: 'none' }}>
        <h4 className='new-user-prompt'>Go Back Home</h4>
      </Link>
    </div>
  )
}

export default SignUp
