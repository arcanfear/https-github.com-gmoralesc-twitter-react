import API from '../../../api';

export function fetchTweets() {
  return async function (dispatch) {
    try {
      const payload = await API.getTweets();
      return dispatch({
        type: 'SET_TWEETS',
        payload,
      });
    } catch (error) {
      return dispatch({
        type: 'SET_TWEETS',
        payload: null,
      });
    }
  };
}
