import React from 'react';
import './Ticket-table.scss';

import TicketColumn from '../ticket-column';

const TicketTable = () => {
  return (
    <div className="ticket-table">
      <TicketColumn title="MOW – HKT" value="10:45 – 08:00" />
      <TicketColumn title="В пути" value="21ч 15м" />
      <TicketColumn title="2 пересадки" value="HKG, JNB" />
    </div>
  );
};

export default TicketTable;
