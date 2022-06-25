import ArticlesShowcase from '../components/ArticlesShowcase'
import Intro from '../components/Intro'
import SkillCards from '../components/skillCards/SkillCards'
import SkillsIntroSvg from '../components/SkillsIntroSvg'
import Vid from '../components/Vid'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <main className={styles.Main}>
      <section className={styles.Main__IntroCon}>
      <SkillsIntroSvg/>
      <Intro/>
      </section>
      <Vid/>
      {/* <ArticlesShowcase/> */}
      <SkillCards/>
    </main>
  )
}
