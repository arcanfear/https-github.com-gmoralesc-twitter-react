import { render, act } from '@testing-library/react';
import faker from 'faker';
import API from '../api';
import List from './List';

jest.mock('../api');

describe('List Container', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('Display tweets', async () => {
    const tweet = {
      id: faker.datatype.uuid(),
      content: faker.lorem.sentences(3),
      user: {
        username: faker.internet.userName(),
        name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        email: faker.internet.email(),
      },
      date: faker.date.past().toLocaleDateString(),
      likes: faker.datatype.number(),
      comments: [],
    };

    API.getTweets.mockResolvedValue([tweet]);

    await act(async () => {
      const { findByText } = render(<List />);
      expect(await findByText(tweet.content)).toBeTruthy();
    });
  });
});
