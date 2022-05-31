import Link from 'next/link'
import Navbar from '../Navbar'
import LOGO from '../../public/logo.png'
import Bar from '../../public/hambar.svg'
import IMAGE from 'next/image'

const Header = () => {
  return (
    <header className='Header'>
        <div className='logo'>
             <IMAGE src={LOGO} alt="LOGO" width={155}/>
        </div>
        <div className='bar'>
             <IMAGE src={Bar} alt="HamBar" width = {80} height= {45}/>
        </div>
        <Navbar/>
    </header>
  )
}

export default Header