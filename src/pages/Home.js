import React, { useEffect, useState } from 'react';
import List from '../containers/List';
import { Helmet } from 'react-helmet';
import TweetForm from '../containers/TweetForm';
import API from '../api';

export default function Home() {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');

  function onAdd() {
    loadList();
  }

  async function loadList() {
    try {
      const data = await API.getTweets();
      if (data) {
        setData(data);
      }
    } catch (error) {
      setError(error.message);
      console.log(error);
    }
  }

  async function onLike(event, id) {
    event.stopPropagation();
    try {
      await API.likeTweet({
        tweetId: id,
      });
      const tweet = await API.getTweet({ id });
      const newList = data.map((item) => {
        if (item.id === id) {
          // return {
          //   ...item,
          //   likes: item.likes + 1
          // };
          return tweet;
        } else {
          return item;
        }
      });
      setData(newList);
      // await loadList();
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    loadList();
  }, []);

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <TweetForm onAdd={onAdd} />
      <List data={data} error={error} onLike={onLike} />
    </>
  );
}
