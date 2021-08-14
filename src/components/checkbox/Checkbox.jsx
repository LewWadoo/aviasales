import React from 'react';

import './Checkbox.scss';
// import checkboxEnabledChecked from './checkbox-enabled-checked.svg';
// import checkboxEnabledUnchecked from './checkbox-enabled-unchecked.svg';

const Checkbox = ({ name, caption }) => {
  const handleChange = () => {};

  return (
    <label className="checkbox">
      <input
        name={name}
        type="checkbox"
        className="checkbox-input"
        value=""
        onChange={handleChange}
      />
      <span className="checkbox-custom"></span>
      {caption}
    </label>
  );
};

export default Checkbox;
