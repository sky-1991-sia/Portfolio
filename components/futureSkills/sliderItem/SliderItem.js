import { Carousel } from 'react-bootstrap'
import Image from 'next/image'

const SliderItem = () => {
  return (
     <Carousel.Item>
               <Image
                 width='100%'
                 height='300px'
                 className="d-block w-100"
                 src="/Jest.svg"
                 alt='alt'
               />
               <Carousel.Caption>
                 <h5>title</h5>
               </Carousel.Caption>
             </Carousel.Item>
  )
}

export default SliderItem