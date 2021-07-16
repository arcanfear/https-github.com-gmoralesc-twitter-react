import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import { NavLink } from 'react-router-dom';
import UserBar from './UserBar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <ListItem component={NavLink} to="/" button>
          <Typography variant="h6" className={classes.title}>
            React Twitter
          </Typography>
        </ListItem>
        <UserBar />
      </Toolbar>
    </AppBar>
  );
}

AppBar.displayName = 'AppBar';

AppBar.propTypes = {};

AppBar.defaultProps = {};
