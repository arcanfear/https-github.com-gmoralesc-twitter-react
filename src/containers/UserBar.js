import React from 'react';
import { isAuthenticated, clearSession } from '../utils/auth';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const selectUser = (state) => state.user;

export default function UserBar() {
  const history = useHistory();
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return isAuthenticated() ? (
    <>
      <ListItem component={NavLink} to={`/profile/${user.id}`} button>
        {user.name}
      </ListItem>
      <Button
        onClick={() => {
          clearSession();
          dispatch({
            type: 'UNSET_USER',
          });
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
