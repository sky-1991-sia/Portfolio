
import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Image from 'next/image'
import LogOut from '../../../public/logout.svg' 
import LogIn from '../../../public/login.svg' 
import PopUp from './PopUp';
import AuthForm from '../../forms/authForm/AuthForm';

export default function SignInPop() {
    const [user, setUser] = React.useState(false)
    const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClickOpenBTN = () => {
        
        if(user){
            setOpen(false)
            setOpen1(true)
        }else{
            setOpen1(false)
            setOpen(true)
        }
        
    };
    
    const handleClose = () => {
      setUser(false)
      setOpen(false);
    };

    const handleCancel = () => {
        setUser(false);
        setOpen(false);
    }
    const handleSubmit = () => {
        setUser(true);
        setOpen(false);
  }


  const [open1, setOpen1] = React.useState(false);

  const handleClickOpen1 = () => {
      setOpen1(true);
    };
    
    const handleClose1 = () => {
      setOpen1(false);
    };

    const handleCancel1 = () => {
        setOpen1(false);
    }
    const handleSubmit1 = () => {
        setUser(false);
        setOpen1(false);
  }



  return (
    <div>
      <div className='auth' onClick={handleClickOpenBTN} style={{cursor:'pointer'}}>{user ? <Image src={LogOut} alt='log out icon'/> : <Image src={LogIn} alt='log in icon'/> }</div>
      
      
      {/* LOG IN DIOLOG */}
      <PopUp
       btn0='Cancel' 
       btn1='Submit' 
       message='welcome to login' 
       title='login'
       handleClose={handleClose}
       handleCancel={handleCancel}
       handleAction={handleSubmit}
       open={open}>
       <AuthForm/>
       </PopUp>

     {/* LOG OUT DIOLOG // same function with additional 1 */}
      <PopUp
       btn0='Cancel' 
       btn1='LogOut' 
       message='are you sure to leave ?' 
       title='Log Out Warning'
       handleClose={handleClose1}
       handleCancel={handleCancel1}
       handleAction={handleSubmit1}
       open={open1}>
         <h4>IM HERE AS CHILD</h4>
       </PopUp>
       
    </div>
  );
}