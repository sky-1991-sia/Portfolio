import Navitem from './Navitem'
import { useState } from 'react'
import { useRouter } from 'next/router'
import SignInPop from './popUps/authPops/SignInPop'

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
              <Navitem path="/blog" handler={activeHandler} active={active}/>
        </ul>
        <SignInPop/>
    </nav>
  )
}

export default Navbar