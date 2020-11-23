import React from 'react';

import TicketTable from '../ticket-table';

import classes from './Ticket.module.scss';
import logo from './S7 Logo.png';

const Ticket = () => {
  return (
    <li className={classes.ticket}>
      <div className={classes.header}>
        <span className={classes.price}>13 400 Р</span>
        <img alt="logo" src={logo} className={classes.logo} />
      </div>
      <TicketTable />
      <TicketTable />
    </li>
  );
};

export default Ticket;
