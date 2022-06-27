
const Footer = () => {
  return (
    <footer className='Footer'>
      <h5 className="Footer__Logo">SkyDe</h5>
      <ul className="Footer__Social">
        <a href="#insta">
          <li><img className="Footer__Social__Item" src="./insta.svg" alt="github logo svg" width='25px' height='25px'/></li>
        </a>
        <a href="#github">
          <li><img className="Footer__Social__Item" src="./github.svg" alt="github logo svg" width='25px' height='25px'/></li>
        </a>
        <a href="#discord">
          <li><img className="Footer__Social__Item" src="./discord.svg" alt="insta logo svg" width='25px' height='25px'/></li>
        </a>
        <a href="#mail">
          <li><img className="Footer__Social__Item" src="./google.svg" alt="insta logo svg" width='25px' height='25px'/></li>
        </a>
        
      </ul>
    </footer>
  )
}

export default Footer