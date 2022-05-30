import Link from 'next/link'
import LogIn from '../public/login.svg'
import LogOut from '../public/logout.svg'
import Image from 'next/image'
import { useState } from 'react'
const Navbar = () => {
  const [ user, setUser] = useState(false)
  const [active,setActive] = useState('Home')

  const userHandler = () => {
    setUser((pre) => !pre)
  }
  const activeHandler = (e) => {
    
    setActive(e.target.getAttribute('data-content'));

  }
  return (
    <nav className="Nav">
        
        <ul>
              <Link href='/'>
                <li data-content = 'Home' onClick={activeHandler} className={active === 'Home' ? 'active' : ''}>
                  <a data-content = 'Home' className='Nav__Link'>Home</a>
                </li>
              </Link>

              <Link href='/projects'>
            <li data-content = 'Projects' onClick={activeHandler} className={active === 'Projects'? 'active' : ''}>
            <a data-content = 'Projects' className='Nav__Link'>Projects</a>
            </li>
            </Link>

              <Link href='/contact'>
            <li data-content = 'Contact'  onClick={activeHandler} className={active === 'Contact'? 'active' : ''}>
            <a data-content = 'Contact' className='Nav__Link'>Contact</a>
            </li>
            </Link>

              <Link href='/about'>
            <li data-content = 'About'  onClick={activeHandler}className={active === 'About'? 'active' : ''}>
            <a data-content = 'About' className='Nav__Link'>About</a>
            </li>
            </Link>
        </ul>
        {user ? 
        <div className='auth' onClick={userHandler}><Image src={LogIn} alt='test'/></div> 
        : 
        <div className='auth' onClick={userHandler}><Image src={LogOut} alt='test'/></div>}
    </nav>
  )
}

export default Navbar