import React from 'react';
import { useHistory } from 'react-router-dom';
import Alert from '../components/Alert';
import Tweet from '../components/Tweet';
import { useTweets } from '../hooks';

function List() {
  const {
    data = [],
    error,
    actions: { like },
  } = useTweets();
  const history = useHistory();

  function displayTweet({ id }) {
    history.push(`/tweets/${id}`);
  }

  async function onLike(event, id) {
    event.stopPropagation();
    try {
      await like({
        tweetId: id,
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {error && <Alert severity="error">{error}</Alert>}
      {data.map(({ id, user, date, content, comments, likes }) => {
        return (
          <div onClick={() => displayTweet({ id })} key={id}>
            <Tweet
              id={id}
              name={user.name}
              username={user.username}
              date={date}
              content={content}
              likes={likes}
              commentsCount={comments.length}
              onLike={onLike}
            />
          </div>
        );
      })}
    </>
  );
}

export default List;
