import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const PopUp = ({handleClose, handleCancel, handleAction, title, message,btn0, btn1, children, open}) => {
  return (
    <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {message}
          </DialogContentText>
          {children}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel} style={{color:'#000'}}>
            {btn0}
          </Button>
          <Button onClick={handleAction} style={{color:'#000'}} autoFocus>
            {btn1}
          </Button>
        </DialogActions>
      </Dialog>
  )
}

export default PopUp