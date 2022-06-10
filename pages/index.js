import Head from 'next/head'
import Image from 'next/image'
import Intro from '../components/Intro'
import SkillsIntroSvg from '../components/SkillsIntroSvg'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <main className={styles.Main}>
      <SkillsIntroSvg/>
      <Intro/>
    </main>
  )
}
