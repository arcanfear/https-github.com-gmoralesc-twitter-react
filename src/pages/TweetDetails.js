import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Tweet from '../components/Tweet';
import Loader from '../components/Loader';
import Alert from '../components/Alert';
import { useTweet } from '../hooks';

const useStyles = makeStyles((theme) => ({
  spacer: {
    padding: theme.spacing(1),
  },
  divider: {
    marginTop: theme.spacing(1),
  },
}));

export default function TweetDetails() {
  const classes = useStyles();
  const { id } = useParams();
  const {
    data: tweet,
    error,
    actions: { createComment, like },
  } = useTweet({ id });

  async function onComment(event) {
    event.preventDefault();
    const { comment } = event.target.elements;
    try {
      await createComment({
        comment: comment.value,
      });
      comment.value = '';
    } catch (error) {
      console.log(error);
    }
  }

  async function onLike(event) {
    event.preventDefault();
    try {
      await like();
    } catch (error) {
      console.log(error);
    }
  }

  if (!tweet)
    return (
      <Card className={`${classes.spacer} ${classes.divider}`}>
        <Loader />
      </Card>
    );

  return (
    <>
      <Helmet>
        <title>Tweet</title>
      </Helmet>
      {error && <Alert severity="error">{error}</Alert>}
      <Tweet
        id={tweet.id}
        name={tweet.user.name}
        username={tweet.user.username}
        content={tweet.content}
        date={tweet.date}
        commentsCount={tweet.comments.length}
        likes={tweet.likes}
        onLike={onLike}
      />
      <form onSubmit={onComment}>
        <div className={classes.spacer} />
        <TextField
          label="Comment"
          multiline
          rows={4}
          name="comment"
          variant="outlined"
          required
          fullWidth
          autoFocus
        />
        <div className={classes.spacer} />
        <Button variant="contained" color="primary" type="submit">
          Comment
        </Button>
      </form>
      {tweet.comments.map(({ _id, comment, user }) => (
        <React.Fragment key={_id}>
          <div className={classes.spacer} />
          <Paper className={classes.spacer}>
            <p>{comment}</p>
            <p>
              {user.name} - @{user.username}
            </p>
          </Paper>
        </React.Fragment>
      ))}
    </>
  );
}
