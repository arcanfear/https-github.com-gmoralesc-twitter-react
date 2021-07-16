import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function Tweet({
  id,
  name = '',
  username = '',
  date = '',
  content = '',
  commentsCount = 0,
  likes = 0,
  onLike = () => {},
}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {name.substring(0, 1).toUpperCase()}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={`${name} - @${username}`}
        subheader={date}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {content}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          aria-label="Like"
          onClick={(event) => {
            onLike(event, id);
          }}
        >
          {likes} <FavoriteIcon />
        </IconButton>
        {commentsCount === 0 ? (
          <ChatBubbleOutlineIcon />
        ) : (
          <>
            {commentsCount} <ChatBubbleIcon />
          </>
        )}
      </CardActions>
    </Card>
  );
}

Tweet.propTypes = {
  /**
   * Id
   */
  id: PropTypes.string,
  /**
   * This is the user's name
   */
  name: PropTypes.string,
  /**
   * This is the user's username
   */
  username: PropTypes.string,
  /**
   * This is the tweet's date
   */
  date: PropTypes.string,
  /**
   * This is the tweet's content
   */
  content: PropTypes.string,
  /**
   * This is the tweet's comments count
   */
  commentsCount: PropTypes.number,
  /**
   * This is the tweet's likes count
   */
  likes: PropTypes.number,
  /**
   * This is a function to broadcast the like from the Tweet
   */
  onLike: PropTypes.func,
};

Tweet.defaultProps = {
  id: '',
  name: '',
  username: '',
  date: '',
  content: '',
  commentsCount: 0,
  likes: 0,
  onLike: undefined,
};
