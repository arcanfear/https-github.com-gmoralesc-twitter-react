import React from 'react';
import { StoreProvider } from '../store/Store';
import { MemoryRouter } from 'react-router-dom';

import NavBar from './NavBar';

export default {
  title: 'Generic/NavBar',
  component: NavBar,
};

const Template = (args) => (
  <StoreProvider>
    <MemoryRouter>
      <NavBar {...args} />
    </MemoryRouter>
  </StoreProvider>
);

export const Login = Template.bind({});
Login.args = {};
