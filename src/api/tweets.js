import { BASE_URL } from '../const';

export async function getTweets() {
  const token = localStorage.getItem('token');
  const response = await fetch(`${BASE_URL}/tweets`, {
    headers: {
      Authorization: token,
    },
  });
  const { data } = await response.json();
  return data;
}
