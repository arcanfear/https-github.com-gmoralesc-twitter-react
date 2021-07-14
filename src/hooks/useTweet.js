import useSWR, { mutate } from 'swr';
import API from '../api';

export default function useTweet({ id } = {}) {
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
