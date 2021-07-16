import React from 'react';

import Alert from './Alert';

export default {
  title: 'Generic/Alert',
  component: Alert,
};

const Template = (args) => <Alert {...args} />;

export const Warning = Template.bind({});
Warning.args = {
  message: 'This is a warning message',
  severity: 'warning',
};

export const Error = Template.bind({});
Error.args = {
  message: 'This is a warning message',
  severity: 'error',
};
