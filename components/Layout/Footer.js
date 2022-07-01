
const Footer = () => {
  return (
    <footer className='Footer'>
      <h5 className="Footer__Logo">SkyDe</h5>
      <ul className="Footer__Social">
       
          <li> <a href="#insta"><img className="Footer__Social__Item" src="./insta.svg" alt="github logo svg" width='25px' height='25px'/></a></li>
        
        
          <li><a href="#github"><img className="Footer__Social__Item" src="./github.svg" alt="github logo svg" width='25px' height='25px'/></a></li>
        
        
          <li><a href="#discord"><img className="Footer__Social__Item" src="./discord.svg" alt="insta logo svg" width='25px' height='25px'/></a></li>
        
       
          <li> <a href="#mail"><img className="Footer__Social__Item" src="./google.svg" alt="insta logo svg" width='25px' height='25px'/></a></li>
        
        
      </ul>
    </footer>
  )
}

export default Footer