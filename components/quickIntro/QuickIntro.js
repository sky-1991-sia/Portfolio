//video component
import Vid from "./Vid"
//muodular style
import styles from '../../styles/QuickIntro.module.scss'

const QuickIntro = () => {
  return (
   <section className={styles.QuickIntro}>
           <Vid/>
   </section>
  )
}

export default QuickIntro