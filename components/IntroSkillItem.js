import styles from '../styles/Intro.module.scss'

const IntroSkillItem = ({content}) => {
  const selectSkills = () => {
    
  }
  return (
    <li onClick={selectSkills} className={styles.Intro__card__list__item} aria-label={content}><strong>{content}</strong></li>
  )
}

export default IntroSkillItem