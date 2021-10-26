import { Link } from 'react-router-dom'
import './LogIn.css'
import loginImg from '../../images/login.png'
import plant2 from '../../images/plant2.png'
import { useEffect, useState } from 'react'

const LogIn = ({ currentUserID, handleChange, usersList  }) => {

  const [conditionalLink, setConditionalLink] = useState('/login/')
  const { users } = usersList;

  const userList = users.map(user => {
    return (
      <option value={user.id} key={user.id}>{`${user.firstName}-${user.lastName}-${user.id}`}</option>
    )
  })

  useEffect(() => {
    if (currentUserID) {
      setConditionalLink('/seeds/')
    }
  }, [currentUserID])

  return (
    <div className='login-container'>
      <img src={plant2} alt='second plant sketch' className='single-plant'/>
      <h3 className='select-name'>Select Your User Name</h3>
      <select className='user-list' onChange={e => handleChange(e.target.value)}>
        {!currentUserID && <option>Click to Expand...</option>}
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
