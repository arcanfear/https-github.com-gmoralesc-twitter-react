import * as Tweets from './tweets';
import * as Users from './users';
export * from './types'

const API = {
  ...Tweets,
  ...Users,
};

export default API;
