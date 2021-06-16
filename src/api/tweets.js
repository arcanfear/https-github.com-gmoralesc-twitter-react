import { BASE_URL } from '../const';

export async function getTweets() {
  const response = await fetch(`${BASE_URL}/tweets`);
  const { data } = await response.json();
  return data;
}
