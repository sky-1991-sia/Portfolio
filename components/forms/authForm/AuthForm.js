import { Button, Grid } from "@mui/material";
import { useState } from "react";
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
    
  return (
    <form className="form" onSubmit={handleSubmit}>
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
          <Button type='submit' fullWidth variant='contained' color='primary' className='submitBtn' >
            {isSignup ? 'sign up' : 'sign in'}
          </Button>
          <br />
          <br />
          {/* <GoogleLogin
            clientId= '865991630475-85e42qjs9qi08thu5robqall8nc4mpia.apps.googleusercontent.com'
            render={(renderProps) => (
              <Button className='form__googleBtn' color='primary' fullWidth onClick={renderProps.onClick}disabled={renderProps.disabled}startIcon={<Icon/>}variant='contained'>
                Google Sing In
              </Button>
            )} 
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy='single_host_origin'
          /> */}
          <Grid container justifyContent='flex-end'> 
          <Grid item>
            <Button className='switchModeBtn' onClick={switchMode}>
              { isSignup ? 'Already have an account? Sign In' : "Don't have an account ? Sign Up" }
            </Button>
          </Grid>

          </Grid>
        </form>
  )
}

export default AuthForm