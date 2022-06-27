import React , { Suspense, useEffect } from 'react'
//components
import Intro from '../components/Intro'
import ArticlesShowcase from '../components/ArticlesShowcase'
import SkillCards from '../components/skillCards/SkillCards'
import SkillsIntroSvg from '../components/SkillsIntroSvg'
import Head from 'next/head'
import Script from "next/script";
//styles
import styles from '../styles/Home.module.scss'
// animate
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import ScrollTopBtn from '../components/ScrollTopBtn'
import FutureSkills from '../components/futureSkills/FutureSkills'
//lazy loading for intro video
const QuickIntro = React.lazy(() => import('../components/quickIntro/QuickIntro'));
//inti AOS for animate components is accsessable in all components in page home
//if needed animate in other pages move this peace of code to _app.js

export default function Home() {
  useEffect(() => {
       AOS.init();
    })
  return (
    <>
      <Head>
        {/* BOOTSTRAP */}
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" ></link>
        {/* BOOTSTRAP */}
      </Head>
      <main className={styles.Main}>
      <section className={styles.Main__IntroCon}>
      <SkillsIntroSvg/>
      <Intro/>
      </section>
      <Suspense fallback={<div>Loading</div>}>
        <QuickIntro/>
      </Suspense>
      {/* <ArticlesShowcase/> */}
      <SkillCards/>
      <ScrollTopBtn/>
      <FutureSkills/>
    </main>
    {/* BOOTSTRAP */}
    <Script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"/>
    <Script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"/>
    <Script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"/>
    {/* BOOTSTRAP */}
    </>
  )
}
