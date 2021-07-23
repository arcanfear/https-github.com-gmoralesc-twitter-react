import http from '../utils/http';
import { formatDistance } from 'date-fns';
import { Tweet } from './types'

function formatTweet(tweet: Tweet): Tweet {
  const date = formatDistance(new Date(tweet.createdAt), new Date());
  return {
    ...tweet,
    id: tweet._id,
    date,
  };
}

function formatTweets(tweets: Tweet[]): Tweet[] {
  // return tweets.map((tweet) => formatTweet(tweet))
  return tweets.map(formatTweet);
}

export async function getTweets(): Promise<Tweet[]> {
  const response = await http.get(`/tweets`);
  const { data }: { data: Tweet[] } = response.data;
  return formatTweets(data);
}

export async function getTweet({ id }: { id: string }): Promise<Tweet> {
  const response = await http.get(`/tweets/${id}`);
  const { data } : { data: Tweet } = response.data;
  return formatTweet(data);
}

export async function createComment({ tweetId, comment }: { tweetId: string, comment: string }): Promise<void> {
  return await http.post(`/tweets/comments`, {
    tweetId,
    comment,
  });
}

export async function likeTweet({ tweetId }: { tweetId: string }): Promise<void> {
  return await http.post(`/tweets/likes/`, {
    tweetId,
  });
}

export async function createTweet({ content }: { content: string }): Promise<Tweet> {
  const response = await http.post('/tweets', {
    content,
  });
  const data = response.data;
  return formatTweet(data);
}
