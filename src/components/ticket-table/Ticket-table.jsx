import React from 'react';
import { format, addMinutes, parseJSON } from 'date-fns';

import './Ticket-table.scss';

import TicketColumn from '../ticket-column';

const TicketTable = ({ origin, destination, date, duration, stops }) => {
  function formattedDuration(minutes) {
    const hours = Math.floor(minutes / 60);
    const mm = minutes - hours * 60;
    return `${hours}ч ${mm}м`;
  }

  function formatDate(dateToFormat) {
    return format(dateToFormat, 'HH:mm');
  }

  function formatStopsCount(count) {
    switch (count) {
      case 0:
        return 'Без пересадок';
      case 1:
        return `${count} пересадка`;
      case 2:
      case 3:
      case 4:
        return `${count} пересадки`;
      default:
        return `${count} пересадок`;
    }
  }

  const parsedDate = parseJSON(date);
  const timeStart = formatDate(parsedDate);
  const timeFinish = formatDate(addMinutes(parsedDate, duration));
  const humanDuration = formattedDuration(duration);

  return (
    <div className="ticket-table">
      <TicketColumn title={`${origin} – ${destination}`} value={`${timeStart} – ${timeFinish}`} />
      <TicketColumn title="В пути" value={humanDuration} />
      <TicketColumn title={formatStopsCount(stops.length)} value={stops.join(', ')} />
    </div>
  );
};

export default TicketTable;
