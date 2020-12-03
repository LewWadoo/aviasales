import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { getError, getLoadingState } from '../../reducers';

import './Header.scss';
import logo from './Logo.png';
import 'antd/dist/antd.css';

import Spinner from '../spinner';
import { Alert } from 'antd';

class Header extends React.Component {
  render() {
    const { error, isLoading } = this.props;
    const spinner = isLoading && !error ? <Spinner /> : null;
    const alert = error ? <Alert type="error" message={error.message} /> : null;
    return (
      <div className="header">
        <img alt="logo" src={logo} />
        <div className="subheader">
          {spinner}
          {alert}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    error: getError(state),
    isLoading: getLoadingState(state),
  };
};

export default connect(mapStateToProps, actions)(Header);
