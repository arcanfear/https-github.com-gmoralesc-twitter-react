import React from 'react';
import List from '../containers/List';
import { Helmet } from 'react-helmet';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <List />
    </>
  );
}
