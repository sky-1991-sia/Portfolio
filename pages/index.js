import React , { Suspense } from 'react'
import ArticlesShowcase from '../components/ArticlesShowcase'
import Intro from '../components/Intro'
import SkillCards from '../components/skillCards/SkillCards'
import SkillsIntroSvg from '../components/SkillsIntroSvg'
import styles from '../styles/Home.module.scss'

//lazy loading for intro video
const Video = React.lazy(() => import('../components/Vid'));

export default function Home() {
  return (
    <main className={styles.Main}>
      <section className={styles.Main__IntroCon}>
      <SkillsIntroSvg/>
      <Intro/>
      </section>
      <Suspense fallback={<div>Loading</div>}>
        <Video/>
      </Suspense>
      {/* <ArticlesShowcase/> */}
      <SkillCards/>
    </main>
  )
}
