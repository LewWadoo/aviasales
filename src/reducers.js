import {
  REQUEST_SEARCH_ID,
  RECIEVE_SEARCH_ID,
  SORT,
  TRANSFERS,
  REQUEST_TICKETS,
  RECIEVE_TICKETS,
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
  return {
    all: isChecked,
    none: isChecked,
    1: isChecked,
    2: isChecked,
    3: isChecked,
  };
};

const initialTransfers = setAllTransfers(false);

const shouldAllTransfersBeChecked = (transfers) => {
  return transfers.none && transfers['1'] && transfers['2'] && transfers['3'];
};

const controlAllCheckbox = (transfers) => {
  if (shouldAllTransfersBeChecked(transfers)) {
    return setAllTransfers(true);
  }

  return { ...transfers, all: false };
};

const transfer = (state = initialTransfers, action) => {
  switch (action.type) {
    case TRANSFERS:
      switch (action.transfers) {
        case 'all':
          return setAllTransfers(!state.all);
        case 'none':
        case '1':
        case '2':
        case '3':
          return controlAllCheckbox({ ...state, [action.transfers]: !state[action.transfers] });
        default:
          return state;
      }
    default:
      return state;
  }
};

const search = (state = '', action) => {
  switch (action.type) {
    case REQUEST_SEARCH_ID:
    case RECIEVE_SEARCH_ID:
      return action.searchId;
    default:
      return state;
  }
};

const getTickets = (state = [], action) => {
  switch (action.type) {
    case REQUEST_TICKETS:
    case RECIEVE_TICKETS:
      return action.tickets;
    default:
      return state;
  }
};

const reducer = (state = {}, action) => {
  return {
    sort: sort(state.sort, action),
    transfers: transfer(state.transfers, action),
    searchId: search(state.searchId, action),
    tickets: getTickets(state.tickets, action),
  };
};

export default reducer;
