import React from 'react';
import SignUpForm from '../containers/SignUpForm';
import { Helmet } from 'react-helmet';

export default function SignUp() {
  return (
    <>
      <Helmet>
        <title>SignUp</title>
      </Helmet>
      <SignUpForm />
    </>
  );
}
