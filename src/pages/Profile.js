import React from 'react';
import UserDetails from '../containers/UserDetails';
import { Helmet } from 'react-helmet';

export default function Profile() {
  return (
    <>
      <Helmet>
        <title>Profile</title>
      </Helmet>
      <UserDetails />
    </>
  );
}
