import useSWR, { mutate } from 'swr';
import API from '../api';

export function useTweets() {
  const { data, error } = useSWR('tweets', () => API.getTweets());

  async function like({ tweetId }) {
    try {
      await API.likeTweet({
        tweetId,
      });
      mutate(
        'tweets',
        (tweets) =>
          tweets.map((item) => {
            if (item.id === tweetId) {
              return {
                ...item,
                likes: item.likes + 1,
              };
            } else {
              return item;
            }
          }),
        false
      );
    } catch (error) {
      Promise.reject(error);
    }
  }

  return {
    data,
    isLoading: !error && !data,
    error,
    actions: {
      like,
    },
  };
}

export function useTweet({ id } = {}) {
  const { data, error } = useSWR(id ? `tweet-${id}` : null, () =>
    API.getTweet({ id })
  );

  async function createComment({ comment }) {
    try {
      await API.createComment({
        tweetId: id,
        comment,
      });
      mutate(`tweet-${id}`);
    } catch (error) {
      Promise.reject(error);
    }
  }

  async function like() {
    try {
      await API.likeTweet({
        tweetId: id,
      });
      mutate(
        `tweet-${id}`,
        {
          ...data,
          likes: data.likes + 1,
        },
        false
      );
    } catch (error) {
      Promise.reject(error);
    }
  }

  return {
    data,
    isLoading: !error && !data,
    error,
    actions: {
      createComment,
      like,
    },
  };
}
