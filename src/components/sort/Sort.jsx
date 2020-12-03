import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import classNames from 'classnames';

import './Sort.scss';

const Sort = ({ sort, sortCheap, sortFast }) => {
  const getButtonClassNames = (order) => ({
    'sort-button': true,
    'sort-button--focused': sort === order,
  });

  const btnCheapClassNames = classNames(getButtonClassNames(actions.SORT_CHEAPEST_FIRST));
  const btnFastClassNames = classNames(getButtonClassNames(actions.SORT_FASTEST_FIRST));

  return (
    <div className="sort">
      <button className={btnCheapClassNames} onClick={sortCheap}>
        самый дешевый
      </button>
      <button className={btnFastClassNames} onClick={sortFast}>
        самый быстрый
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    sort: state.sort,
  };
};

export default connect(mapStateToProps, actions)(Sort);
