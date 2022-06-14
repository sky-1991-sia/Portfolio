import Navitem from './Navitem'
import LogIn from '../public/login.svg'
import LogOut from '../public/logout.svg'
import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/router'

const Navbar = () => {
  //temperary(must change with auth)
  const [ user, setUser] = useState(false);
  const userHandler = () => {
    setUser((pre) => !pre)
  }
  
  //toggle navItems active/deactive
  const router = useRouter();

  const [active,setActive] = useState(router.pathname)
  const activeHandler = (e) => {
    setActive(e.target.getAttribute('data-content'));
  }
  
  return (
    <nav className="Nav"> 
        <ul className='Nav__List'>
              <Navitem path="/" handler={activeHandler} active={active}/>
              <Navitem path="/projects" handler={activeHandler} active={active}/>
              <Navitem path="/contact" handler={activeHandler} active={active}/>
              <Navitem path="/about" handler={activeHandler} active={active}/>
              <Navitem path="/quiz" handler={activeHandler} active={active}/>
              <Navitem path="/interview" handler={activeHandler} active={active}/>
              <Navitem path="/blog" handler={activeHandler} active={active}/>
              <Navitem path="/learn" handler={activeHandler} active={active}/>
        </ul>
        {user ? 
        <div className='auth' onClick={userHandler}><Image src={LogIn} alt='test'/></div> 
        : 
        <div className='auth' onClick={userHandler}><Image src={LogOut} alt='test'/></div>}
    </nav>
  )
}

export default Navbar