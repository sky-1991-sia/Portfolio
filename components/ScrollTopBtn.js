//Needs refactoring

import { useState, useEffect } from 'react'
const ScrollTopBtn = () => {
    const [visible,setVisible] = useState(false);
    const toggleVisiblility = () => {
        if(window.scrollY > 1500){
           setVisible(true)
        }
        if(window.scrollY < 1500){
            setVisible(false)
        }

    }

    useEffect(() => {
        window.addEventListener('scroll' , toggleVisiblility);

        return () => {
            window.removeEventListener('scroll',toggleVisiblility)
        }
    },[])

    const goTopHandler = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }
  return (
    <div onClick={goTopHandler} style={{ width:'3rem', height:'3rem', position:'fixed',top:'60%', right:`${visible ? '3%' : '-3rem'}`, borderRadius:'50%', cursor:'pointer', transition:'all 0.5s'}}>
        <img src="./arrow_circle_up.svg" alt="svg" />
    </div>
  )
}

export default ScrollTopBtn