import { Button, Grid } from "@mui/material";
import { useState } from "react";
import { signIn , useSession } from 'next-auth/react' 
import Input from "./Input"
const AuthForm = () => {
    const handleChange = () => {
        console.log('now');
    }
    
    const [isSignup,setIsSignup] = useState(false);
    const [showPassword,setShowPassword] = useState(false);

    const switchMode = () => {
        setIsSignup((pre) => !pre)
    }
    
    const handleSubmit = () => {
        console.log(submit);
    }

    const handleShowPassword = () => {
        setShowPassword((pre) => !pre)
    }

    const handleSignin = () => {
        signIn('github')
    }
    const handleSignin1 = () => {
        signIn('google')
    }

  return (
    <form className="form" onSubmit={handleSubmit}>
            <div style={{display:'grid',justifyItems:'center'}}>
              <h4>{ isSignup ? "Sign Up" : "Sign In"}</h4>
              <Button className='switchModeBtn' onClick={switchMode} style={{color:'#000'}}>
              { isSignup ? 'Already have an account? Sign In' : "Don't have an account ? Sign Up" }
            </Button>
            </div>
            <hr/>
            <Button className='submitBtn' onClick={handleSignin} fullWidth variant='contained' style={{background:'#000',margin:'0.5rem 0'}}>
              GitHub
            </Button>
            <Button className='submitBtn' onClick={handleSignin1} fullWidth variant='contained' style={{background:'#000',marginBottom:'0.5rem'}}>
              Google
            </Button>
            <span style={{display:'inline-block', textAlign:'center',width:'100%',margin:'1rem 0'}}>OR</span>
          <Grid container spacing={2}>
            {
              isSignup && (
                <>
                <Input name='firstName' label='First Name' handleChange={handleChange} half />
                <Input name='lastName' label='Last Name' handleChange={handleChange} half />
                </>
              )
            }
            <Input name='email' label='Email Address' handleChange={handleChange} type='email' />
            <Input name='password' label='Password' handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword}/>
            { isSignup && <Input name='confirmpassword' type={showPassword ? 'text' : 'password'} label='Repeat Password' handleChange={handleChange} handleShowPassword={handleShowPassword} />}
          </Grid>
          <br />
          <Button type='submit' fullWidth variant='contained' color='primary' className='submitBtn' style={{background:'#000'}}>
            {isSignup ? 'sign up' : 'sign in'}
          </Button>
          <Grid container justifyContent='flex-end'> 
          <Grid item>
          </Grid>
          </Grid>
        </form>
  )
}

export default AuthForm