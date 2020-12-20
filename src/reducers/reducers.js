import {
  REQUEST_SEARCH_ID,
  RECEIVE_SEARCH_ID,
  REQUEST_TICKETS,
  RECEIVE_TICKETS,
  RECEIVE_ERROR,
  IGNORE_ERROR,
} from '../../actions.js';

export const error = (state = null, action) => {
  switch (action.type) {
    case RECEIVE_SEARCH_ID:
    case RECEIVE_TICKETS:
      return null;
    case RECEIVE_ERROR:
      return action.error;
    case IGNORE_ERROR:
      return null;

    default:
      return state;
  }
};
