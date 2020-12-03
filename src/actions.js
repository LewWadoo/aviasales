export const REQUEST_SEARCH_ID = 'REQUEST_SEARCH_ID';
export function requestSearchId() {
  return {
    type: REQUEST_SEARCH_ID,
    searchId: '',
  };
}

export const RECEIVE_SEARCH_ID = 'RECEIVE_SEARCH_ID';
export function receiveSearchId(result) {
  return {
    type: RECEIVE_SEARCH_ID,
    searchId: result.searchId,
  };
}

export function fetchSearchId() {
  return function (dispatch) {
    dispatch(requestSearchId());
    return fetch(`https:front-test.beta.aviasales.ru/search`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }

        throw new Error('Очередной ложный статус: ' + response.status);
      })
      .then((result) => {
        dispatch(receiveSearchId(result));
        return result;
      })
      .catch((error) => {
        return dispatch(receiveError(error));
      });
  };
}

export const REQUEST_TICKETS = 'REQUEST_TICKETS';
export function requestTickets() {
  return {
    type: REQUEST_TICKETS,
  };
}

export const RECEIVE_TICKETS = 'RECEIVE_TICKETS';
export function receiveTickets(result) {
  return {
    type: RECEIVE_TICKETS,
    tickets: result.tickets,
    stop: result.stop,
  };
}

export const RECEIVE_ERROR = 'RECEIVE_ERROR';
export function receiveError(error) {
  return {
    type: RECEIVE_ERROR,
    error: error,
  };
}

export function fetchTickets(searchId) {
  return function (dispatch) {
    dispatch(requestTickets());
    return fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }

        throw new Error('Очередной ложный статус: ' + response.status);
      })
      .then((result) => {
        dispatch(receiveTickets(result));
        return result;
      })
      .catch((error) => {
        return dispatch(receiveError(error));
      });
  };
}

export const SORT = 'SORT';
export const SORT_CHEAPEST_FIRST = 'SORT_CHEAPEST_FIRST';
export function sortCheap() {
  return {
    type: SORT,
    order: SORT_CHEAPEST_FIRST,
  };
}

export const SORT_FASTEST_FIRST = 'SORT_FASTEST_FIRST';
export function sortFast() {
  return {
    type: SORT,
    order: SORT_FASTEST_FIRST,
  };
}

export const TRANSFERS = 'TRANSFERS';
export function transfersAll() {
  return {
    type: TRANSFERS,
    transfers: -1,
  };
}

export function transfersNone() {
  return {
    type: TRANSFERS,
    transfers: 0,
  };
}

export function transfers1() {
  return {
    type: TRANSFERS,
    transfers: 1,
  };
}

export function transfers2() {
  return {
    type: TRANSFERS,
    transfers: 2,
  };
}

export function transfers3() {
  return {
    type: TRANSFERS,
    transfers: 3,
  };
}

// export const TRANSFERS = 'TRANSFERS';
// export function transfersAll() {
//   return {
//     type: TRANSFERS,
//     transfers: 'all',
//   };
// }

// export function transfersNone() {
//   return {
//     type: TRANSFERS,
//     transfers: 'none',
//   };
// }

// export function transfers1() {
//   return {
//     type: TRANSFERS,
//     transfers: '1',
//   };
// }

// export function transfers2() {
//   return {
//     type: TRANSFERS,
//     transfers: '2',
//   };
// }

// export function transfers3() {
//   return {
//     type: TRANSFERS,
//     transfers: '3',
//   };
// }
