import styles from '../styles/Intro.module.scss'
import IntroSkillItem from './IntroSkillItem'
const Intro = () => {
  return (
    <section className={styles.Intro}>
       <div className={styles.Intro__card}>
         <span className={styles.Intro__card__name}>Hii,i'm Sky</span>
       <h1 className={styles.Intro__card__title}>Web Developer</h1>
       <ul className={styles.Intro__card__list}>
         <IntroSkillItem content={'react developer'}/>
         <IntroSkillItem content={'famillar with ui/ux principles'}/>
         <IntroSkillItem content={'have expreinces with backend'}/>
         <IntroSkillItem content={'self learner'}/>
       </ul>
       <button aria-label='button for submit job offer' className={styles.Intro__card__btn}>JOB OFFER</button>
       </div>
    </section>
  )
}

export default Intro