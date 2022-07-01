import SkillCard from "./skillCard/SkillCard"
import styles from '../../styles/SkillCard.module.scss'
import { Grid, Box, Paper } from "@mui/material"
import { useEffect } from 'react'
import QuickIntro from '../quickIntro/QuickIntro'
const skills = [
    {
        id:1,
        alt:'HTML LOGO SVG',
        title:'HTML',
        icon:'Html',
        description:'HTML asr qwer fdsaf asfgaste wegfsadf sdfwef saefsadf asdf',
        features: [
            'semantic HTML',
            'technical SEO',
            'elememts / attributes',
            'forms / input types',
            'imports / META tags',
            'lists / anchor',
            'tables',
            'events',
            'webstorage',
            'images / multimedia',
            'frame',
            'canvas / SVG',
            'frame',
        ]
    },
    {
        id:2,
        alt:'CSS LOGO SVG',
        title:'CSS',
        icon:'Css',
        description:'CSS asr qwer fdsaf asfgaste wegfsadf sdfwef saefsadf asdf',
        features: [
            'selectors(basic/complex)',
            'Psuedo selectors',
            'specificity / inheritance',
            'Box model',
            'typography',
            'positions / units / display',
            'Layout : Flex / Grid',
            'responsive design',
            'shadows',
            'colors / gradiants',
            'transforms / transition',
            'animations',
            'Media queries',
            'CSS varibles',
            'BEM',
        ]
    },
    {
        id:3,
        alt:'SASS LOGO SVG',
        title:'SASS',
        icon:'Sass',
        description:'Js  asr qwer fdsaf asfgaste wegfsadf sdfwef saefsadf asdf',
        features: [
            'Nested style',
            'Mixin',
            'Varibles',
            'Data iterate',
            'Best practices',
        ]
    },
    {
        id:4,
        alt:'BOOTSTRAP LOGO SVG',
        title:'BOOTSTRAP',
        icon:'Bootstrap',
        description:'React  asr qwer fdsaf asfgaste wegfsadf sdfwef saefsadf asdf',
        features: [
            'BS fundamentals',
            'Responsive pattern',
            'Usage',
            'Docs',
        ]
    },
    {
        id:5,
        alt:'MATERIAL LOGO SVG',
        title:'MATERIAL UI',
        icon:'Mui',
        description:'Node  asr qwer fdsaf asfgaste wegfsadf sdfwef saefsadf asdf',
        features: [
            'MUI fundamentals',
            'Responsive pattern',
            'Usage',
            'Docs',
        ]
    },
    {
        id:6,
        alt:'JAVASCRIPT LOGO SVG',
        title:'JAVASCRIPT',
        icon:'Js',
        description:'Node  asr qwer fdsaf asfgaste wegfsadf sdfwef saefsadf asdf',
        features: [
            'varibles & primitives',
            'scope / hoisting',
            'operators / type conversions',
            'closures',
            'objects / methods',
            'arrays / methods',
            'functions / arrow funtions',
            'timeoute / interval',
            'mudules',
            'classes / proxies',
            'ES6 / syntaxes',
            'prototypes',
            'iterators / iterables',
            'destructuring / spread',
            'THIS keyword',
            'callbacks / promise',
            'async await',
        ]
    },
    {
        id:7,
        alt:'WEBPACK LOGO SVG',
        title:'WEBPACK',
        icon:'Webpack',
        description:'Node  asr qwer fdsaf asfgaste wegfsadf sdfwef saefsadf asdf',
        features: [
            'configs for bundling',
            'entry / output',
            'loaders',
            'plugins',
            'dev server / production',
        ]
    },
    {
        id:8,
        alt:'REACT JS LOGO SVG',
        title:'REACT JS',
        icon:'React',
        description:'Node  asr qwer fdsaf asfgaste wegfsadf sdfwef saefsadf asdf',
        features: [
            'fundamentals',
            'functional components',
            'class components',
            'JSX',
            'hooks',
            'props',
            'state managment',
            'routes',
            'auth',
            'client-side fetch',
        ]
    },
    {
        id:9,
        alt:'REDUX LOGO SVG',
        title:'REDUX',
        icon:'Redux',
        description:'Node  asr qwer fdsaf asfgaste wegfsadf sdfwef saefsadf asdf',
        features: [
            'fundamentals',
            'store',
            'action creators',
            'reducers',
            'best practices',
        ]
    },
    {
        id:10,
        alt:'NODE JS LOGO SVG',
        title:'NODE JS',
        icon:'Node',
        description:'Node  asr qwer fdsaf asfgaste wegfsadf sdfwef saefsadf asdf',
        features: [
            'basic familarity',
            'creating server',
            'connecting to db',
            'cors',
            'ENV',
            'integretion with express',
        ]
    },
    {
        id:11,
        alt:'EXPRESS JS LOGO SVG',
        title:'EXPRESS JS',
        icon:'Express',
        description:'Node  asr qwer fdsaf asfgaste wegfsadf sdfwef saefsadf asdf',
        features: [
            'faster server side development',
            'middleware',
            'Routing',
            'Templating',
            'Debugging',
        ]
    },
    {
        id:12,
        alt:'MONGO DB LOGO SVG',
        title:'MONGO DB',
        icon:'Mongodb',
        description:'Node  asr qwer fdsaf asfgaste wegfsadf sdfwef saefsadf asdf',
        features: [
            'basic familarity',
            'CRUD',
            'indexing',
            'querys',
            'mongodb atlas',
        ]
    },
    {
        id:13,
        alt:'NEXT JS LOGO SVG',
        title:'NEXT JS',
        icon:'Next',
        description:'Node  asr qwer fdsaf asfgaste wegfsadf sdfwef saefsadf asdf',
        features: [
            'fundamentals',
            'pre rendering / SSR SSG',
            'auth',
            'routes / nested routes / dynamic routes',
            'apis / dynamic apis',
            'best practices',
        ]
    },
    {
        id:14,
        alt:'GIT LOGO SVG',
        title:'GIT',
        icon:'Git',
        description:'Node  asr qwer fdsaf asfgaste wegfsadf sdfwef saefsadf asdf',
        features: [
            'fundamentals',
            'syntax and commands',
            'usage',
            'GitHub',
        ]
    },
    {
        id:15,
        alt:'ADOBE XD LOGO SVG',
        title:'ADOBE XD',
        icon:'Xd',
        description:'Node  asr qwer fdsaf asfgaste wegfsadf sdfwef saefsadf asdf',
        features: [
            'fundamentals',
            'assets',
            'components',
            'prototypes',
            'exporting design to code',
        ]
    },
    {
        id:16,
        alt:'ADOBE ILLUSTRATOR LOGO SVG',
        title:'ADOBE ILLUSTRATOR',
        icon:'Ai',
        description:'Node  asr qwer fdsaf asfgaste wegfsadf sdfwef saefsadf asdf',
        features: [
            'basic familarity',
            'basic tools',
            'complex shape and logo design',
        ]
    },
    {
        id:17,
        alt:'ADOBE AFTER EFFECT LOGO SVG',
        title:'ADOBE AFTER EFFECT',
        icon:'Ae',
        description:'Node  asr qwer fdsaf asfgaste wegfsadf sdfwef saefsadf asdf',
        features: [
            'fundamentals',
            'basic tools',
            'motion tracking',
            'masking',
            'simple projects',
        ]
    }
]
const SkillCards = () => {
  return (
    <section className={styles.Cards} >
        <h2 className={styles.Cards__title}>Scroll To Explore Skills</h2>
        {/* <QuickIntro/> */}
                     <Grid container spacing={2}>
                         {
                             skills.map(skill => (
                                 <>
                                 <Grid 
                                 //github AOS
                                 data-aos="sm-fade-up-lg-slide-right"
                                 data-aos-offset="300"
                                 data-aos-duration="1100"
                                 //github AOS  
                                 key={skill.id}
                                 className={styles.CardCon}
                                 //MUI 
                                 justifyContent="center" 
                                 container 
                                 item 
                                 xs={12} md={6} xl={4}
                                 //MUI
                                 >
                                   <SkillCard key={skill.id} {...skill} /> 
                                 </Grid>
                                 </>
                             ))
                         }
                     </Grid>      
    </section>
  )
}

export default SkillCards




