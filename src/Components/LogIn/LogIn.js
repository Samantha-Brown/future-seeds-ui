import { users } from '../../data/mockData'
import './LogIn.css'

import loginImg from '../../images/login.png'
import signUpImg from '../../images/signup.png'

const LogIn = () => {

  const userList = users.map(user => {
    return (
      <option value={user.id} key={user.id}>{`${user.first_name}-${user.last_name}-${user.id.toString()}`}</option>
    )
  })

  return (
    <div className='login-container'>
      <h3>Select Your User Name</h3>
      <select className='user-list'> {userList} </select>
      <img src={loginImg} className='menu-btn' alt='log in btn'/>
      <h4>New User? Sign Up Here</h4>
    </div>
  )
}

export default LogIn