import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import MuiAlert from '@material-ui/lab/Alert';
import Tweet from '../components/Tweet';
// import API from '../api';
import { connect } from 'react-redux';
import { fetchTweets } from '../store/reducers/tweets/actions';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function List({ list, loadList }) {
  const [error, setError] = useState('');
  const history = useHistory();

  function displayTweet({ id }) {
    history.push(`/tweets/${id}`);
  }

  // async function onLike(event, id) {
  //   event.stopPropagation();
  //   try {
  //     await API.likeTweet({
  //       tweetId: id,
  //     });
  //     const tweet = await API.getTweet({ id });
  //     const newList = data.map((item) => {
  //       if (item.id === id) {
  //         // return {
  //         //   ...item,
  //         //   likes: item.likes + 1
  //         // };
  //         return tweet;
  //       } else {
  //         return item;
  //       }
  //     });
  //     setData(newList);
  //     // await loadList();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  function onLike() {}

  useEffect(() => {
    loadList();
  }, []);

  return (
    <>
      {error && <Alert severity="error">{error}</Alert>}
      {list.map(({ id, user, date, content, comments, likes }) => {
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

const mapStateToProps = (state) => {
  return {
    list: state.tweets,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadList: () => dispatch(fetchTweets()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
