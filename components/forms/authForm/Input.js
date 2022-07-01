import Image from 'next/image'
import { TextField , Grid , InputAdornment , IconButton } from '@mui/material';
// import Visbility from '@mui/material/icons/Visibility';
// import VisbilityOff from '@mui/material/icons/VisibilityOff';

const Input = ({ half , name , type , label , autoFocus , handleChange , handleShowPassword}) => {

  return (
    <Grid item xs={12} xl={half ? 6 : 12}>
        <TextField
        onChange={handleChange}
        name={name}
        variant= 'outlined'
        // required
        fullWidth
        label={label}
        autoFocus = {autoFocus}
        type={type}
        InputProps={new RegExp('password*').test(name) ? {
            endAdornment:(
                <InputAdornment position='end'>
                    <IconButton onClick={handleShowPassword}>
                        {type === 'password' ? <Image width='25rem' height='25rem' src='/visOn.svg'/> : <Image width='25rem' height='25rem' src='/visOff.svg'/>}
                    </IconButton>
                </InputAdornment>
            )

        }:null}
        />
    </Grid>
  )
}

export default Input