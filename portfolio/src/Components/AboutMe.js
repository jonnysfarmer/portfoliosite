import React, { useState } from 'react'

import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'
import { useHistory } from 'react-router-dom'
import grey from '@material-ui/core/colors/grey'
import Grid from '@material-ui/core/Grid'
import Typist from 'react-typist'
import Headshot from '../styles/Images/Headshot.jpg'
import { Hidden, ThemeProvider, Divider } from '@material-ui/core'



import { theme } from '../styles/styles'

import Box from '@material-ui/core/Box'

const useStyles = makeStyles(theme => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(12),
    minHeight: '100%',

  },
  backgroundColor: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'

  },
  title: {
    textAlign: 'center',
    color: grey[50],
    fontWeight: '400'

  },
  image: {
    width: '60%',
    height: '60%',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  },
  buttonMargin:{
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  }
}))


const randomFacts = ['I don’t eat cheese. I’m not vegan, I just don\'t like the taste', 'When I was growing up I wanted to be a vet',
'I’ve had a motorcycle license since I was 17 but it took me until 30 to pass my car test', 'I love whisky. Japanese is my favourite, anything peaty from Scotland, is a close second',
'I’m a big fan of Manga and am currently reading One Piece, Tower of God and Sololeveling', 'My first pet was a gecko called Dexter']



const About = () => {

  const [random, setRandom]= useState('')

  const classes = useStyles()

  const RandomFact =(e) => {
    e.preventDefault()
  
    const RandomNum = Math.floor(Math.random() * 6)
    console.log(RandomNum)
    setRandom(randomFacts[RandomNum])

  }

  

  return (
    <div className={classes.backgroundColor}>
      <Box height='100vh' >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container component="main" maxWidth="sm" className={classes.paper} >
          
            <Typography component="h1" variant="h4" color='primary'>
              About Me 
            </Typography>
            <img src={Headshot} alt='headshot' className={classes.image} ></img>
            <Typography component='h3' variant='subtitle1' color='textSecondary'>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
            in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </Typography>
            <Button
              type="submit"
              size='medium'
              variant="contained"
              color="secondary"
              onClick={(e)=>RandomFact(e)}
              className={classes.buttonMargin}
            >
              Random Fact Generator
          </Button>
          <Typography component='h3' variant='subtitle1' color='secondary' align='center'>
            {random}
            </Typography>
    
        </Container>
        </ThemeProvider>
      </Box >
    </div>

  )


}

export default About