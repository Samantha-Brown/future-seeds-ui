import { Link } from 'react-router-dom'

import titleWhite from '../../images/title-white.png'
import loginImg from '../../images/login.png'
import signUpImg from '../../images/signup.png'
import seedGrow from '../../images/seed-grow.png'

import './Home.css'

const Home = () => {

  return (
    <div className='home-container'>
      <img src={seedGrow} className='seed-logo' alt='seed logo'/>
      <img src={titleWhite} className='home-logo' alt='future seeds title'/>
      <div className='options-container'>
        <Link to='/login/'>
          <img src={loginImg} className='menu-btn' alt='log in btn'/>
        </Link>
        <Link to='/signup/'>
          <img src={signUpImg} className='menu-btn' alt='sign up btn'/>
        </Link>
      </div>
    </ div>
  )
}

export default Home