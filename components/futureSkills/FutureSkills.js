
import Image from 'next/image'
import { Paper } from '@mui/material'
import { Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import styles from '../../styles/FutureSkills.module.scss'


//needs clean code by crating reusable component for each slide Item

const FutureSkills = () => {
  return (
    <>
    <section className={styles.FutureSkills}>
        <h4 className={styles.FutureSkills__title}>Im pursuing opportunities to learn</h4>
        <Paper style={{background:'#000'}} elevation={3} 
        data-aos="slide-up" 
        data-aos-offset="350"
        data-aos-delay="50"
        data-aos-duration="1100">
          <Carousel interval={1500} style={{padding:'4rem'}}>
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
                 {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
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
                 {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
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
                 {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
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
                 {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
               </Carousel.Caption>
             </Carousel.Item>
          </Carousel>
        </Paper>
    </section>
    </>
  )
}

export default FutureSkills