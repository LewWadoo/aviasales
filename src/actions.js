export const REQUEST_SEARCH_ID = 'REQUEST_SEARCH_ID';
export function requestSearchId() {
  return {
    type: REQUEST_SEARCH_ID,
    searchId: '',
  };
}

export const RECIEVE_SEARCH_ID = 'RECIEVE_SEARCH_ID';
export function recieveSearchId(result) {
  return {
    type: RECIEVE_SEARCH_ID,
    searchId: result.searchId,
  };
}

export function fetchSearchId() {
  return function (dispatch) {
    dispatch(requestSearchId());
    return fetch(`https:front-test.beta.aviasales.ru/search`)
      .then(
        (response) => response.json(),
        (reject) => {
          return { type: 'ERROR', msg: reject };
        },
      )
      .then((result) => dispatch(recieveSearchId(result)));
  };
}

export const REQUEST_TICKETS = 'REQUEST_TICKETS';
export function requestTickets() {
  return {
    type: REQUEST_TICKETS,
    tickets: '',
  };
}

export const RECIEVE_TICKETS = 'RECIEVE_TICKETS';
export function recieveTickets(result) {
  return {
    type: RECIEVE_TICKETS,
    tickets: result.tickets,
  };
}

export function fetchTickets(searchId) {
  return function (dispatch) {
    dispatch(requestTickets());
    return fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`)
      .then(
        (response) => response.json(),
        (reject) => {
          return { type: 'ERROR', msg: reject };
        },
      )
      .then((result) => dispatch(recieveTickets(result)));
  };
}

export const SORT = 'SORT';
export function sortCheap() {
  return {
    type: SORT,
    order: 'cheapest',
  };
}

export function sortFast() {
  return {
    type: SORT,
    order: 'fastest',
  };
}

export const TRANSFERS = 'TRANSFERS';
export function transfersAll() {
  return {
    type: TRANSFERS,
    transfers: 'all',
  };
}

export function transfersNone() {
  return {
    type: TRANSFERS,
    transfers: 'none',
  };
}

export function transfers1() {
  return {
    type: TRANSFERS,
    transfers: '1',
  };
}

export function transfers2() {
  return {
    type: TRANSFERS,
    transfers: '2',
  };
}

export function transfers3() {
  return {
    type: TRANSFERS,
    transfers: '3',
  };
}
