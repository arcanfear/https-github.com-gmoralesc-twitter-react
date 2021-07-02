import React from 'react';
import AuthForm from '../containers/AuthForm';
import { Helmet } from 'react-helmet';

export default function Login() {
  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <AuthForm />
    </>
  );
}
