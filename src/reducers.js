import { combineReducers } from 'redux';

import {
  REQUEST_SEARCH_ID,
  RECEIVE_SEARCH_ID,
  SORT,
  TRANSFERS,
  REQUEST_TICKETS,
  RECEIVE_TICKETS,
  RECEIVE_ERROR,
  IGNORE_ERROR,
} from './actions.js';

const sort = (state = {}, action) => {
  switch (action.type) {
    case SORT:
      return action.order;
    default:
      return state;
  }
};

const setAllTransfers = (isChecked) => {
  if (isChecked) {
    return [-1, 0, 1, 2, 3];
  }

  return [];
};

const initialTransfers = setAllTransfers(false);

const shouldAllTransfersBeChecked = (transfers) => {
  return (
    transfers.includes(0) && transfers.includes(1) && transfers.includes(2) && transfers.includes(3)
  );
};

const controlAllCheckbox = (transfers) => {
  if (shouldAllTransfersBeChecked(transfers)) {
    return setAllTransfers(true);
  }

  return removeTransfer(transfers, -1);
};

const removeTransfer = (transfers, transfer) => {
  const index = transfers.indexOf(transfer);
  if (index > -1) {
    return [...transfers.slice(0, index), ...transfers.slice(index + 1)];
  }

  return transfers;
};

const changeTransfer = (transfers, transfer) => {
  if (transfers.includes(transfer)) {
    return removeTransfer(transfers, transfer);
  }

  return [...transfers, transfer];
};

const transfers = (state = initialTransfers, action) => {
  switch (action.type) {
    case TRANSFERS:
      switch (action.transfers) {
        case -1:
          return setAllTransfers(!state.includes(-1));
        case 0:
        case 1:
        case 2:
        case 3:
          return controlAllCheckbox(changeTransfer(state, action.transfers));
        default:
          return state;
      }
    default:
      return state;
  }
};

const searchId = (state = '', action) => {
  switch (action.type) {
    case REQUEST_SEARCH_ID:
    case RECEIVE_SEARCH_ID:
      return action.searchId;
    default:
      return state;
  }
};

const tickets = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_TICKETS:
      return state.concat(action.tickets);
    default:
      return state;
  }
};

const isLoading = (state = false, action) => {
  switch (action.type) {
    case REQUEST_TICKETS:
      return true;
    case RECEIVE_SEARCH_ID:
    case RECEIVE_TICKETS:
    case RECEIVE_ERROR:
      return false;
    default:
      return state;
  }
};

const stop = (state = false, action) => {
  switch (action.type) {
    case REQUEST_SEARCH_ID:
    case REQUEST_TICKETS:
    case RECEIVE_ERROR:
      return false;
    case RECEIVE_TICKETS:
      return action.stop;
    default:
      return state;
  }
};

const error = (state = null, action) => {
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

const reducer = combineReducers({
  sort,
  transfers,
  searchId,
  isLoading,
  error,
  tickets,
  stop,
});

export default reducer;

export const getSort = (state) => state.sort;
export const getTransfers = (state) => state.transfers;
export const getSearchId = (state) => state.searchId;
export const getTickets = (state) => state.tickets;
export const getError = (state) => state.error;
export const getStop = (state) => state.stop;
export const getLoadingState = (state) => state.isLoading;
