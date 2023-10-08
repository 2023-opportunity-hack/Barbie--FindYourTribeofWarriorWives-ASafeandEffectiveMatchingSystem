import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {db} from './firebase';
import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';



export default function FormDialog() {
  const [name, setName] = useState('');
  const handleName = (event) => {
    setName(event.target.value);
  };


  const [date, setDate] = useState('');
  const handleDate = (event) => {
    setDate(event.target.value);
  };

  const [time, setTime] = useState('');
  const handleTime = (event) => {
    setTime(event.target.value);
  };

  const [zoom, setZoom] = useState('');
  const handleZoom = (event) => {
    setZoom(event.target.value);
  };

    const [open, setOpen] = React.useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const handleCreate = () => {
      const data = {
        key1: name,
        key2: date,
        key3: time,
        key4: zoom,
      };

      console.log(data);
      
      try {
        const docRef = addDoc(collection(db, 'events'), data);
        console.log('Document written with ID: ', docRef.id);
      } catch (error) {
        console.error('Error adding document: ', error);
      }
      
    };
  
    return (
      <div className="colored-button-div">

        <button className="colored-button" onClick={handleClickOpen}>Create Event</button>
        
        <Dialog open={open} onClose={handleClose}  maxWidth="md" fullWidth>
          <DialogTitle>Create Event</DialogTitle>
          <DialogContent>
            <DialogContentText>Event Name</DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              type="text"
              fullWidth
              variant="standard"
              value = { name }
              onChange={ handleName }
            />

            <DialogContentText>Event Date</DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="date"
              type="date"
              fullWidth
              variant="standard"
              value = { date }
              onChange={ handleDate }
            />

          <DialogContentText>Event Time</DialogContentText>
          <TextField
              autoFocus
              margin="dense"
              id="time"
              type="time"
              fullWidth
              variant="standard"
              value = { time }
              onChange={ handleTime }
            />

          <DialogContentText>Zoom Link</DialogContentText>
          <TextField
              autoFocus
              margin="dense"
              id="zoomlink"
              type="text"
              fullWidth
              variant="standard"
              value = { zoom }
              onChange={ handleZoom }
            />


          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleCreate}>Create</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }