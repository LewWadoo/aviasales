import React from 'react';
import './Header.scss';
import logo from './Logo.png';

const Header = () => {
  return (
    <div className="header">
      <img alt="logo" src={logo} />
    </div>
  );
};

export default Header;
