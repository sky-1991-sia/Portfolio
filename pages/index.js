import React , { Suspense, useEffect } from 'react'
//components
import Intro from '../components/Intro'
import ArticlesShowcase from '../components/ArticlesShowcase'
import SkillCards from '../components/skillCards/SkillCards'
import SkillsIntroSvg from '../components/SkillsIntroSvg'
import FutureSkills from '../components/futureSkills/FutureSkills'
import Head from 'next/head'
//styles
import styles from '../styles/Home.module.scss'
// animate
import AOS from 'aos';
import 'aos/dist/aos.css'; 

//inti AOS for animate components is accsessable in all components in page home
//if needed animate in other pages move this peace of code to _app.js

export default function Home() {
  useEffect(() => {
       AOS.init();
    })
  return (
    <>
      <main className={styles.Main}>
      <section className={styles.Main__IntroCon}>
      <SkillsIntroSvg/>
      <Intro/>
      </section>
      <SkillCards/>
      <hr style={{margin:'8rem 1.5rem'}}/>
      <FutureSkills/>
    </main>
    </>
  )
}
