import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import './Sort.scss';

const Sort = ({ state, sortCheap, sortFast }) => {
  return (
    <div className="sort">
      <button className="sort-button" onClick={sortCheap}>
        самый дешевый
      </button>
      <button className="sort-button" onClick={sortFast}>
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
