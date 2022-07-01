import styles from '../../../styles/SkillCard.module.scss'
import Paper from '@mui/material/Paper';
import Image from 'next/image'
import LikeBtn from '../../likeBtn/LikeBtn';
const skillCard = ({title, description, features , icon}) => {
  return (
    <Paper elevation={2} className={styles.Card}>
      <section id={icon} role='banner' className={styles.Banner}>
        <h3>{title}</h3>
        <Image src={`/${icon}.svg`} alt={`Icon for ${icon}`} width='65rem' height='65rem' />
      </section>
      <ul className={styles.Card__List}>
        {
          features.map((f, index) => <li className={styles.Card__Item} key={index}>{f}</li>)
        }
      </ul>
      {/* <p className={styles.Card__Description}>{description}</p> */}
      <LikeBtn/>
    </Paper>
  )
}

export default skillCard