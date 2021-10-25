import { Link } from 'react-router-dom'
import boxLogo from '../../images/fs.png'
import './NavBar.css'

const NavBar = () => {

return (
  <div>
    <div className='top-home-bar'>
      <img src={boxLogo} alt='small logo' className='small-logo'/>
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
