import React, { useState } from 'react';
import './Contacts.css';
import { TextField, Grid, Typography, Box, Button } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import db from '../Firebase';

const Contacts = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    if (event.currentTarget.form.reportValidity()) {
      if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        db.collection('contacts').add({ name: name, email: email, message: message })
          .then(() => {
            setName('');
            setEmail('');
            setMessage('');
            alert('Message sent sucessfully.');
          })
          .catch(() => alert('Something went wrong. Check your internet and try again.'));
      } else {
        alert('Please enter a valid email id.');
      }
    }
  }

  return (
    <Grid container justify="center" style={{ marginTop: "5rem", cursor: "default" }}>
      <Box component="form" onSubmit={handleSubmit} style={{ flexGrow: 0.5 }}>
        <Typography variant="h5" style={{ marginBottom: "2rem" }}>Let's Talk</Typography>
        <TextField
          required
          label="Name"
          variant="outlined"
          margin="dense"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <br />
        <TextField
          required
          label="Email"
          variant="outlined"
          margin="dense"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <br />
        <TextField
          required
          label="Message"
          variant="outlined"
          margin="dense"
          multiline
          fullWidth
          inputProps={{
            style: { height: "15rem", }
          }}
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <br />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          endIcon={<SendIcon />}
          style={{ backgroundColor: "#004cff", color: "rgb(0,0,75)", marginTop: "1rem" }}
          onClick={handleSubmit}
        >
          Send
          </Button>
      </Box>
    </Grid>
  )
}

export default React.memo(Contacts);