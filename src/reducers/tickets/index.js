import { RECEIVE_TICKETS } from '../../actions.js';

export const tickets = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_TICKETS:
      return state.concat(action.tickets);
    default:
      return state;
  }
};
