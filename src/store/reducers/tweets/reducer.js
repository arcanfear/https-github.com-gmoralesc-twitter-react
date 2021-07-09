import { initialState } from '../../state';

export function tweetsReducer(state = initialState.tweets, action) {
  switch (action.type) {
    case 'SET_TWEETS':
      return action.payload;
    default:
      return state;
  }
}
