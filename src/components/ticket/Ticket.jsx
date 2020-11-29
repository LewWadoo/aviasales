import React from 'react';

import TicketTable from '../ticket-table';

import classes from './Ticket.module.scss';
// import logo from './S7 Logo.png';

const Ticket = ({ price, carrier, segments }) => {
  // const imageSrc = posterPath === null ? '' : `https://image.tmdb.org/t/p/w500${posterPath}`;

  return (
    <li className={classes.ticket}>
      <div className={classes['header']}>
        <span className={classes.price}>{price} Р</span>
        <img alt="logo" src={`//pics.avs.io/99/36/${carrier}.png`} className={classes.logo} />
      </div>
      <TicketTable {...segments[0]} />
      <TicketTable {...segments[1]} />
    </li>
  );
};

export default Ticket;
