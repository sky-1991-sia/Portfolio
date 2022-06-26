
const Vid = () => {
  return (
    <div style={{width:'100%', display:'grid', placeItems:'center' , zIndex:'0'}}>
        <h2>Quick Intro</h2>
        <video width='90%' height='auto' controls poster="/endPic.jpg"> 
          <source src="./Quick-intro-v4.mp4" type="video/mp4"></source>
        </video>
    </div>
  )
}

export default Vid