
import { Suspense, lazy } from 'react'
//video component
import Video from "./Vid"
//muodular style
import styles from '../../styles/QuickIntro.module.scss'

//lazyLoad
// const Video = lazy(() => import('../quickIntro/Vid'));


const QuickIntro = () => {
  return (
   <section className={styles.QuickIntro}>
      {/* <Suspense fallback={<div>Loading</div>}> */}
           <Video/>
      {/* </Suspense> */}
   </section>
  )
}

export default QuickIntro



