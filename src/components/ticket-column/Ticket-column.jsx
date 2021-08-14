import React from 'react';
import './Ticket-column.scss';

const TicketColumn = ({ title, value }) => {
  return (
    <div className="ticket-column">
      <div className="title">{title}</div>
      <div className="value">{value}</div>
    </div>
  );
};

export default TicketColumn;
