import SkillCard from "./skillCard/SkillCard"
import styles from '../../styles/SkillCard.module.scss'
import { Grid, Box, Paper } from "@mui/material"


const skills = [
    {
        id:1,
        title:'HTML',
        icon:'Html',
        description:'HTML asr qwer fdsaf asfgaste wegfsadf sdfwef saefsadf asdf',
        features: [
            'fundamentals',
            'semantic HTML',
            'forms and validation',
            'accessibility',
            'technical SEO',
            'SVG / CANVAS',
        ]
    },
    {
        id:2,
        title:'CSS',
        icon:'Css',
        description:'CSS asr qwer fdsaf asfgaste wegfsadf sdfwef saefsadf asdf',
        features: [
            'CSS fundamentals',
            'layouts',
            'responsive design / media querys',
            'flex / Grid',
            'mobile first design',
            'BEM',
            'box model / display / positioning',
        ]
    },
    {
        id:3,
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
        title:'JAVASCRIPT',
        icon:'Js',
        description:'Node  asr qwer fdsaf asfgaste wegfsadf sdfwef saefsadf asdf',
        features: [
            'syntax and fundamentals',
            'DOM mainoulation',
            'ES6 features',
            'modular javaScript',
            'hoisting / event bubbling / scope / shadow DOM',
        ]
    },
    {
        id:7,
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
        title:'ADOBE ILUSTERATOR',
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
        <h3 className={styles.Cards__title}>Scroll To Explore Skills</h3>
                
                     <Grid container spacing={2}>
                         {
                             skills.map(skill => (
                                 <>
                                 <Grid className={styles.CardCon} justifyContent="center" container item key={skill.id}  xs={12} md={6} xl={4}>
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




