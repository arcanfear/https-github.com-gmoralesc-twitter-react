import React from 'react';

import Tweet from './Tweet';

export default {
  title: 'Generic/Tweet',
  component: Tweet,
};

const Template = (args) => <Tweet {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  id: '',
  name: 'Gustavo Morales',
  username: 'gmoralesc',
  date: new Date().toDateString(),
  content: 'This is a tweet',
  commentsCount: 5,
  likes: 1,
  onLike: undefined,
};
