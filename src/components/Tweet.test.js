import { render } from '@testing-library/react';
import faker from 'faker';

import Tweet from './Tweet';

describe('Tweet Component', () => {
  test('Render with basic information', () => {
    const user = {
      username: faker.internet.userName(),
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      email: faker.internet.email(),
    };
    const content = faker.lorem.sentences(3);
    const date = faker.date.past().toLocaleDateString();

    const { getByText } = render(
      <Tweet
        id="0"
        name={user.name}
        username={user.username}
        date={date}
        content={content}
        commentsCount={0}
        likes={0}
        onLike={() => {}}
      />
    );

    expect(getByText(`${user.name} - @${user.username}`)).toBeTruthy();
  });
});
