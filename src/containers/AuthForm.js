import { Button, TextField, Typography } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import API from '../api';
import { setSession } from '../utils/auth';
import { useStore } from '../store/Store';

export default function AuthForm() {
  const history = useHistory();
  const {
    actions: { login },
  } = useStore();

  async function onSubmit(event) {
    event.preventDefault();
    const { username, password } = event.target.elements;
    try {
      const data = await API.login({
        username: username.value,
        password: password.value,
      });
      const { token } = data;
      setSession({ data: token });
      login({
        id: data.id,
        name: data.name,
        username: data.username,
        email: data.email,
      });
      history.push('/');
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <Typography variant="h4">Login</Typography>
      <form onSubmit={onSubmit}>
        <TextField
          name="username"
          label="Username"
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <TextField
          name="password"
          label="Password"
          type="password"
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <Button
          variant="contained"
          color="primary"
          margin="normal"
          fullWidth
          type="submit"
        >
          Login
        </Button>
      </form>
    </>
  );
}
