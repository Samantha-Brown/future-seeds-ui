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
          <Link to='/login' className='links log-in' style={{ textDecoration: 'none' }}>Log In</Link>
          <Link to='signup' className='links' style={{ textDecoration: 'none' }}>Sign Up</Link>
        </div>
      </div>
      <div className='home-line'></div>
      <div className='main-title'>
        <img src={titleLogo} alt='future seeds title' className='big-logo'/>
      </div>
      <div className='home-line'></div>
      <div className='bottom-home'>
        <div className='mission'>
          <h4 className='mission-quote'>"... this is where the impactful mission statement goes. Oh my, it's SO impactful. Seeds, Journals, etc."</h4>
          <p className='mission-author'>- Future Seeds</p>
        </div>
      </div>
    </ div>
  )
}

export default Home
