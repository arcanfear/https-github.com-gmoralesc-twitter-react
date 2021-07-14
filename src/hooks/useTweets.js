import useSWR, { mutate } from 'swr';
import API from '../api';

export default function useTweets() {
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
