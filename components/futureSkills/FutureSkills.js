
import Image from 'next/image'
import { Paper } from '@mui/material'
import { Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import styles from '../../styles/FutureSkills.module.scss'
import SliderItem from './sliderItem/SliderItem';




//needs clean code by crating reusable component for each slide Item

const FutureSkills = () => {
  return (
    <>
    <section className={styles.FutureSkills}>
        <h4 className={styles.FutureSkills__title}>Im interested about learning</h4>
        <Paper style={{background:'#000'}} elevation={3} 
        data-aos="zoom-in"
        data-aos-once="true" 
        data-aos-offset="350"
        data-aos-delay="50"
        data-aos-duration="1100">
          <Carousel interval={1300} style={{padding:'4rem'}}>
             <Carousel.Item>
               <Image
                 width='100%'
                 height='300px'
                 className="d-block w-100"
                 src="/Jest.svg"
                 alt="First slide"
               />
               <Carousel.Caption>
                 <h5>Teasting</h5>
               </Carousel.Caption>
             </Carousel.Item>
             <Carousel.Item>
               <Image
                 width='100%'
                 height='300px'
                 className="d-block w-100"
                 src="/Ts.svg"
                 alt="First slide"
               />
               <Carousel.Caption>
                 <h5>TypeScript</h5>
               </Carousel.Caption>
             </Carousel.Item>
             <Carousel.Item>
               <Image
                 width='100%'
                 height='300px'
                 className="d-block w-100"
                 src="/Graphql.svg"
                 alt="Second slide"
               />
               <Carousel.Caption>
                 <h5>GraphQL</h5>
               </Carousel.Caption>
             </Carousel.Item>
             <Carousel.Item>
               <Image
                 width='100%'
                 height='300px'
                 className="d-block w-100"
                 src="/Pwa.svg"
                 alt="Third slide"
               />
               <Carousel.Caption>
                 <h5>PWA</h5>
               </Carousel.Caption>
             </Carousel.Item>
          </Carousel>
        </Paper>
    </section>
    </>
  )
}

export default FutureSkills