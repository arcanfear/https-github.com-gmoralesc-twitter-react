import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import API from '../api';

const useStyles = makeStyles((theme) => ({
  spacer: {
    padding: theme.spacing(1),
  },
}));

export default function TweetForm({ onAdd }) {
  const classes = useStyles();

  async function onSubmit(event) {
    event.preventDefault();
    const { content } = event.target.elements;
    try {
      const tweet = await API.createTweet({
        content: content.value,
      });
      content.value = '';
      onAdd(tweet);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <div className={classes.spacer} />
      <TextField
        label="Tweet"
        multiline
        rows={4}
        name="content"
        variant="outlined"
        required
        fullWidth
        autoFocus
      />
      <div className={classes.spacer} />
      <Button variant="contained" color="primary" type="submit">
        Tweet
      </Button>
    </form>
  );
}
