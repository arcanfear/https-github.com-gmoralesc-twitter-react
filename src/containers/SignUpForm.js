import React from 'react';

import { Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import API from '../api';
import { useHistory } from 'react-router-dom';

export default function SignUpForm() {
  const history = useHistory();

  async function create(event) {
    event.preventDefault();
    const { name, username, email, password, passwordConfirmation } =
      event.target.elements;

    try {
      if (password.value !== passwordConfirmation.value) {
        return;
      }

      const data = await API.createUser({
        name: name.value,
        username: username.value,
        email: email.value,
        password: password.value,
        passwordConfirmation: passwordConfirmation.value,
      });

      if (data) {
        history.push(`/login`);
      }
    } catch (error) {}
  }
  return (
    <>
      <Typography variant="h4">SingUp</Typography>
      <form autoComplete="off" onSubmit={create}>
        <TextField
          name="name"
          required
          label="Name"
          margin="normal"
          fullWidth
        />
        <TextField
          name="username"
          required
          label="Username"
          margin="normal"
          fullWidth
        />
        <TextField
          name="email"
          required
          label="Email"
          margin="normal"
          type="email"
          fullWidth
        />
        <TextField
          name="password"
          required
          label="Password"
          margin="normal"
          type="password"
          fullWidth
        />
        <TextField
          name="passwordConfirmation"
          required
          label="Password Confirmation"
          margin="normal"
          type="password"
          fullWidth
        />
        <Button variant="contained" color="primary" type="submit" fullWidth>
          Create User
        </Button>
      </form>
    </>
  );
}
