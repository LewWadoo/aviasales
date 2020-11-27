const sort = (state = {}, action) => {
  switch (action.type) {
    case 'SORT':
      return action.order;
    default:
      return state;
  }
};

const initialTransfers = {
  all: false,
  none: false,
  1: false,
  2: false,
  3: true,
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

const shouldAllTransfersBeChecked = (transfers) => {
  // eslint-disable-next-line no-console
  console.log('in shouldAllTransfersBeChecked: transfers', transfers);

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
    case 'TRANSFERS':
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

const reducer = (state = {}, action) => {
  return {
    sort: sort(state.sort, action),
    transfers: transfer(state.transfers, action),
  };
};

export default reducer;
