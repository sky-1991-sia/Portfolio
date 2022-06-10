import styles from '../styles/Intro.module.scss'

const IntroSkillItem = ({content}) => {

  return (
    <li className={styles.Intro__card__list__item} aria-label={content}>{content}</li>
  )
}

export default IntroSkillItem