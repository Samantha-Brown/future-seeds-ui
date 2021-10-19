import { Link } from 'react-router-dom'

import boxLogo from '../../images/fs.png'
import titleLogo from '../../images/title-green.png'

import './Home.css'

const Home = () => {

  return (
    <div className='home-container'>
      <div className='top-home-bar'>
        <img src={boxLogo} alt='small logo' className='small-logo'/>
        <div className='home-links'>
          <Link to='/login' className='links'>Log In</Link>
          <Link to='signup' className='links'>Sign Up</Link>
        </div>
      </div>
      <div className='home-line'></div>
      <div className='main-title'>
        <img src={titleLogo} alt='future seeds title' className='big-logo'/>
      </div>
      <div className='home-line'></div>
      <div className='mission'>
        <h4>... this is where the impactful mission statement goes. Oh my, it's SO impactful. Seeds, Journals, etc.</h4>
        <p>- Future Seeds</p>
      </div>
    </ div>
  )
}

export default Home