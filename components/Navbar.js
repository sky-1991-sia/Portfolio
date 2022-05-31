import Navitem from './Navitem'
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
        
        <ul className='Nav__List'>
              <Navitem name="Home" handler={activeHandler} href='/' active={active}/>
              <Navitem name="Projects" handler={activeHandler} href='/projects' active={active}/>
              <Navitem name="Contact" handler={activeHandler} href='/contact' active={active}/>
              <Navitem name="About" handler={activeHandler} href='/about' active={active}/>
        </ul>
        {user ? 
        <div className='auth' onClick={userHandler}><Image src={LogIn} alt='test'/></div> 
        : 
        <div className='auth' onClick={userHandler}><Image src={LogOut} alt='test'/></div>}
    </nav>
  )
}

export default Navbar