import Image from 'next/image'
import { Paper } from '@mui/material'

const FutureSkills = () => {
  return (
    <>
    <section className='FutureSkills' style={{padding:'2rem 1.5rem',zIndex:'1',textAlign:'center'}}>
        <h4>Im pursuing opportunities which can provide platform for me to :</h4>
        <Paper style={{background:'#000'}}>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active p-5">
        <h2 style={{width:'100%', height:'300px', display:'grid', placeContent:'center', color:'#fff' }}>Using my current skills and improve them</h2>

    </div>
    <div className="carousel-item p-5">
        <h2 style={{width:'100%', height:'300px', display:'grid', placeContent:'center', color:'#fff' }}>Learning testing for applications</h2>
    </div>
    <div className="carousel-item p-5">
        <h2 style={{width:'100%', height:'300px', display:'grid', placeContent:'center', color:'#fff' }}>Learning how to use TS in our application</h2>
    </div>
    <div className="carousel-item p-5">
        <h2 style={{width:'100%', height:'300px', display:'grid', placeContent:'center', color:'#fff' }}>Learning 123</h2>
    </div>
    <div className="carousel-item p-5">
        <h2 style={{width:'100%', height:'300px', display:'grid', placeContent:'center', color:'#fff' }}>Learning 6546</h2>
    </div>
    <div className="carousel-item p-5">
        <h2 style={{width:'100%', height:'300px', display:'grid', placeContent:'center', color:'#fff' }}>Learning 98765</h2>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
        </Paper>
    </section>
    </>
  )
}

export default FutureSkills