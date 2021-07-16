import { Button, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import API from '../api';
import { setSession } from '../utils/auth';
import { useStore } from '../store/Store';
import Alert from '../components/Alert';

export default function AuthForm() {
  const history = useHistory();
  const {
    actions: { login },
  } = useStore();
  const [error, setError] = useState('');

  async function onSubmit(event) {
    event.preventDefault();
    const { username, password } = event.target.elements;
    try {
      setError('');
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
      setError('Incorrect username or password');
    }
  }

  return (
    <>
      <Typography variant="h4">Login</Typography>
      {error && <Alert severity="error" message={error} />}
      <form onSubmit={onSubmit}>
        <TextField
          placeholder="username"
          name="username"
          label="Username"
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <TextField
          placeholder="password"
          name="password"
          label="Password"
          type="password"
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <Button
          placeholder="submit"
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
