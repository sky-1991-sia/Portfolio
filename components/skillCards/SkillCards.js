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
            'some feature 1',
            
        ]
    },
    {
        id:2,
        title:'CSS',
        icon:'Css',
        description:'CSS asr qwer fdsaf asfgaste wegfsadf sdfwef saefsadf asdf',
        features: [
            'some feature 1',
            'some feature 2',
            'some feature 3',
            'some feature 4',
            'some feature 5',
        ]
    },
    {
        id:3,
        title:'SASS',
        icon:'Sass',
        description:'Js  asr qwer fdsaf asfgaste wegfsadf sdfwef saefsadf asdf',
        features: [
            'some feature 1',
            
            'some feature 4',
            'some feature 5',
        ]
    },
    {
        id:4,
        title:'BOOTSTRAP',
        icon:'Bootstrap',
        description:'React  asr qwer fdsaf asfgaste wegfsadf sdfwef saefsadf asdf',
        features: [
            'some feature 1',
            'some feature 2',
            'some feature 3',
            'some feature 2',
            'some feature 3',
            'some feature 2',
            'some feature 3',
            'some feature 4',
            'some feature 5',
        ]
    },
    {
        id:5,
        title:'MATERIAL UI',
        icon:'Mui',
        description:'Node  asr qwer fdsaf asfgaste wegfsadf sdfwef saefsadf asdf',
        features: [
            'some feature 1',
            
            'some feature 5',
        ]
    },
    {
        id:6,
        title:'JAVASCRIPT',
        icon:'Js',
        description:'Node  asr qwer fdsaf asfgaste wegfsadf sdfwef saefsadf asdf',
        features: [
            'some feature 1',
            'some feature 2',
            'some feature 3',
            'some feature 4',
            'some feature 5',
        ]
    },
    {
        id:7,
        title:'WEBPACK',
        icon:'Webpack',
        description:'Node  asr qwer fdsaf asfgaste wegfsadf sdfwef saefsadf asdf',
        features: [
            'some feature 1',
            'some feature 2',
            'some feature 3',
            'some feature 4',
            'some feature 5',
        ]
    },
    {
        id:8,
        title:'REACT JS',
        icon:'React',
        description:'Node  asr qwer fdsaf asfgaste wegfsadf sdfwef saefsadf asdf',
        features: [
            'some feature 1',
            'some feature 2',
            'some feature 3',
            'some feature 4',
            'some feature 5',
        ]
    },
    {
        id:9,
        title:'REDUX',
        icon:'Redux',
        description:'Node  asr qwer fdsaf asfgaste wegfsadf sdfwef saefsadf asdf',
        features: [
            'some feature 1',
            'some feature 2',
            'some feature 3',
            'some feature 4',
            'some feature 5',
        ]
    },
    {
        id:10,
        title:'NODE JS',
        icon:'Node',
        description:'Node  asr qwer fdsaf asfgaste wegfsadf sdfwef saefsadf asdf',
        features: [
            'some feature 1',
            'some feature 2',
            'some feature 3',
            'some feature 4',
            'some feature 5',
        ]
    },
    {
        id:11,
        title:'EXPRESS JS',
        icon:'Express',
        description:'Node  asr qwer fdsaf asfgaste wegfsadf sdfwef saefsadf asdf',
        features: [
            'some feature 1',
            'some feature 2',
            'some feature 3',
            'some feature 4',
            'some feature 5',
        ]
    },
    {
        id:12,
        title:'MONGO DB',
        icon:'Mongodb',
        description:'Node  asr qwer fdsaf asfgaste wegfsadf sdfwef saefsadf asdf',
        features: [
            'some feature 1',
            'some feature 2',
            'some feature 3',
            'some feature 4',
            'some feature 5',
        ]
    },
    {
        id:13,
        title:'NEXT JS',
        icon:'Next',
        description:'Node  asr qwer fdsaf asfgaste wegfsadf sdfwef saefsadf asdf',
        features: [
            'some feature 1',
            'some feature 2',
            'some feature 3',
            'some feature 4',
            'some feature 5',
        ]
    },
    {
        id:14,
        title:'GIT',
        icon:'Git',
        description:'Node  asr qwer fdsaf asfgaste wegfsadf sdfwef saefsadf asdf',
        features: [
            'some feature 1',
            'some feature 2',
            'some feature 3',
            'some feature 4',
            'some feature 5',
        ]
    },
    {
        id:15,
        title:'ADOBE XD',
        icon:'Xd',
        description:'Node  asr qwer fdsaf asfgaste wegfsadf sdfwef saefsadf asdf',
        features: [
            'some feature 1',
            'some feature 2',
            'some feature 3',
            'some feature 4',
            'some feature 5',
        ]
    },
    {
        id:16,
        title:'ADOBE ILUSTERATOR',
        icon:'Ai',
        description:'Node  asr qwer fdsaf asfgaste wegfsadf sdfwef saefsadf asdf',
        features: [
            'some feature 1',
            'some feature 2',
            'some feature 3',
            'some feature 4',
            'some feature 5',
        ]
    },
    {
        id:17,
        title:'ADOBE AFTER EFFECT',
        icon:'Ae',
        description:'Node  asr qwer fdsaf asfgaste wegfsadf sdfwef saefsadf asdf',
        features: [
            'some feature 1',
            'some feature 2',
            'some feature 3',
            'some feature 4',
            'some feature 5',
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




