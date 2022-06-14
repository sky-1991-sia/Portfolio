import styles from '../../../styles/SkillCard.module.scss'
import Paper from '@mui/material/Paper';
import Image from 'next/image'
const skillCard = ({title, description, features , icon}) => {
  console.log(icon);
  return (
    <Paper elevation={2} className={styles.Card}>
      <section role='banner' className={styles.Banner}>
        <h3>{title}</h3>
        <img src={`./${icon}.svg`} alt="test" />
      </section>
      <ul>
        {
          features.map((f, index) => <li className={`icon ${icon}`} key={index}>{f}</li>)
        }
      </ul>
      <p>{description}</p>
    </Paper>
  )
}

export default skillCard