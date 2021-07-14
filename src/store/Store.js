import React, { useReducer } from 'react';
import reducer from './reducer';
import initialState from './state';
import { resetUser, updateUser } from './actions';

const Store = React.createContext({});

export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const actions = {
    login: (payload) => updateUser(dispatch, payload),
    updateUser: (payload) => updateUser(dispatch, payload),
    logout: () => resetUser(dispatch),
  };

  return (
    <Store.Provider
      value={{
        state,
        actions,
      }}
    >
      {children}
    </Store.Provider>
  );
}

export default Store;
