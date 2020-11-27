export function sortCheap() {
  return {
    type: 'SORT',
    order: 'cheapest',
  };
}

export function sortFast() {
  return {
    type: 'SORT',
    order: 'fastest',
  };
}

export function transfersAll() {
  return {
    type: 'TRANSFERS',
    transfers: 'all',
  };
}

export function transfersNone() {
  return {
    type: 'TRANSFERS',
    transfers: 'none',
  };
}

export function transfers1() {
  return {
    type: 'TRANSFERS',
    transfers: '1',
  };
}

export function transfers2() {
  return {
    type: 'TRANSFERS',
    transfers: '2',
  };
}

export function transfers3() {
  return {
    type: 'TRANSFERS',
    transfers: '3',
  };
}
