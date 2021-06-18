import React from 'react';
import List from './containers/List';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Container from '@material-ui/core/Container';
import AuthForm from './containers/AuthForm';
import ListItem from '@material-ui/core/ListItem';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';

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

function App() {
  const classes = useStyles();

  return (
    <Router>
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
          <ListItem component={NavLink} to="/login" button>
            Login
          </ListItem>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm">
        <Switch>
          <Route path="/login">
            <AuthForm />
          </Route>
          <Route path="/">
            <List />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
