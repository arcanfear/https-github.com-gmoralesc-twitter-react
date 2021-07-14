import React, { useContext } from 'react';
import { isAuthenticated, clearSession } from '../utils/auth';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import { NavLink, useHistory } from 'react-router-dom';
import Store from '../store/Store';

export default function UserBar() {
  const history = useHistory();
  const { state, dispatch } = useContext(Store);
  const { user } = state;

  return isAuthenticated() ? (
    <>
      <ListItem component={NavLink} to={`/profile/${user.id}`} button>
        {user.name}
      </ListItem>
      <Button
        onClick={() => {
          clearSession();
          dispatch({ type: 'UNSET_USER' });
          history.push('/login');
        }}
      >
        Logout
      </Button>
    </>
  ) : (
    <ListItem component={NavLink} to="/login" button>
      Login
    </ListItem>
  );
}
