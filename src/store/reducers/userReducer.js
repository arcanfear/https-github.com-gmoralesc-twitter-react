import { initialState } from '../state';

export function userReducer(state = initialState.user, action) {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...action.payload,
      };
    case 'UNSET_USER':
      return {
        ...initialState.user,
      };
    default:
      return state;
  }
}
