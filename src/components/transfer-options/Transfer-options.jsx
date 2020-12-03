import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { getTransfers } from '../../reducers';

import './Transfer-options.scss';
import Checkbox from '../checkbox';

const TransferOptions = ({
  transfers,
  transfersAll,
  transfersNone,
  transfers1,
  transfers2,
  transfers3,
}) => {
  return (
    <div className="transfer-options">
      <p className="transfer-options-title">Количество пересадок</p>
      <Checkbox isChecked={transfers.includes(-1)} caption="Все" onChange={transfersAll} />
      <Checkbox
        isChecked={transfers.includes(0)}
        caption="Без пересадок"
        onChange={transfersNone}
      />
      <Checkbox isChecked={transfers.includes(1)} caption="1 пересадка" onChange={transfers1} />
      <Checkbox isChecked={transfers.includes(2)} caption="2 пересадки" onChange={transfers2} />
      <Checkbox isChecked={transfers.includes(3)} caption="3 пересадки" onChange={transfers3} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    transfers: getTransfers(state),
  };
};

export default connect(mapStateToProps, actions)(TransferOptions);
