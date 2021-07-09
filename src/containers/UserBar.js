import React from 'react';
import { isAuthenticated, clearSession } from '../utils/auth';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import { NavLink, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

function UserBar({ user, unsetUser }) {
  const history = useHistory();

  return isAuthenticated() ? (
    <>
      <ListItem component={NavLink} to={`/profile/${user.id}`} button>
        {user.name}
      </ListItem>
      <Button
        onClick={() => {
          clearSession();
          unsetUser();
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

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    unsetUser: () => {
      dispatch({
        type: 'UNSET_USER',
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserBar);
