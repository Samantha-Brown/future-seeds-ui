import { Link } from 'react-router-dom'
import boxLogo from '../../images/fs.png'
import './NavBar.css'



const NavBar = ({userPersonalInfo}) => {

return (
  <div>
    <div className='top-home-bar'>
      <div className="left-nav">
        <img src={boxLogo} alt='small logo' className='small-logo'/>
        <div className="user-information">
          <p className="user-name">Hello {userPersonalInfo.firstName} {userPersonalInfo.lastName}</p>
          <p>{userPersonalInfo.userCity}, {userPersonalInfo.userState}</p>
        </div>
      </div>
      <div className='home-links'>

        <Link to='/seeds' className='links to-seeds' style={{ textDecoration: 'none' }}>Seeds</Link>
        <Link to='/journal' className='links to-journal' style={{ textDecoration: 'none' }}>Journal</Link>
          <Link to='/' className='links to-home' style={{ textDecoration: 'none' }}>Log Out</Link>
      </div>
    </div>
    <div className='home-line'></div>
  </div>
  )
}

export default NavBar;
