import React from 'react';

import './Checkbox.scss';

const Checkbox = ({ isChecked, caption, onChange }) => {
  return (
    <label className="checkbox">
      <input
        type="checkbox"
        className="checkbox-input"
        value=""
        onChange={onChange}
        checked={isChecked}
      />
      <span className="checkbox-custom"></span>
      {caption}
    </label>
  );
};

export default Checkbox;
