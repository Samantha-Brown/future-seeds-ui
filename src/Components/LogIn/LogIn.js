import { Link } from 'react-router-dom'
import { users } from '../../data/mockData'
import './LogIn.css'

import loginImg from '../../images/login.png'
import plant2 from '../../images/plant2.png'
import { useEffect, useState } from 'react'

import { useQuery, gql } from '@apollo/client'
import { LOAD_ALL_USERS } from '../../GraphQL/Queries'

const LogIn = ({ currentUser, handleChange }) => {

  const [conditionalLink, setConditionalLink] = useState('/login/')

  const {error, loading, data} = useQuery(LOAD_ALL_USERS)




  const userList = users.map(user => {
    return (
      <option value={user.id} key={user.id}>{`${user.first_name}-${user.last_name}-${user.id}`}</option>
    )
  })

  useEffect(() => {
    if (currentUser) {
      setConditionalLink('/seeds/')
    }

    if (data) {
      console.log('graphql data:', data)
    }
  }, [currentUser])

  return (
    <div className='login-container'>
      <img src={plant2} alt='second plant sketch' className='single-plant'/>
      <h3 className='select-name'>Select Your User Name</h3>
      <select className='user-list' onChange={e => handleChange(e.target.value)}>
        {!currentUser && <option>Click to Expand...</option>}
        {userList}
      </select>
      <Link to={conditionalLink}>
        <img src={loginImg} className='menu-btn-login' alt='log in btn'/>

      </Link>
      <Link to='/signup/' style={{ textDecoration: 'none' }}>
        <h4 className='new-user-prompt'>New User? Sign Up Here</h4>
      </Link>
      <Link to='/' style={{ textDecoration: 'none' }}>
        <h4 className='new-user-prompt'>Go Back Home</h4>
      </Link>
    </div>
  )
}

export default LogIn
