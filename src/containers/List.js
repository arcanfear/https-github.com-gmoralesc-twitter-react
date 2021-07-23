import React from 'react';
import { useHistory } from 'react-router-dom';
import Alert from '../components/Alert';
import Tweet from '../components/Tweet';

function List({ data = [], error = '', onLike }) {
  const history = useHistory();

  function displayTweet({ id }) {
    history.push(`/tweets/${id}`);
  }

  return (
    <>
      {error && <Alert severity="error" message={error} />}
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
