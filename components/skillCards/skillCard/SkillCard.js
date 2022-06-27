import styles from '../../../styles/SkillCard.module.scss'
import Paper from '@mui/material/Paper';
import Image from 'next/image'
const skillCard = ({title, description, features , icon}) => {
  return (
    <Paper elevation={2} className={styles.Card}>
      <section id={icon} role='banner' className={styles.Banner}>
        <h3>{title}</h3>
        {/* must change with next Image components for better perfomance */}
        <img src={`./${icon}.svg`} alt="test" />
      </section>
      <ul>
        {
          features.map((f, index) => <li className={styles.Card__Item} key={index}>{f}</li>)
        }
      </ul>
      <p className={styles.Card__Description}>{description}</p>
    </Paper>
  )
}

export default skillCard