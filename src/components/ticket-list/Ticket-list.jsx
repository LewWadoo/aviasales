import React from 'react';
import { connect } from 'react-redux';
import { Alert } from 'antd';

import * as actions from '../../actions';
import { getSearchId, getTickets, getSort, getTransfers } from '../../reducers';

import './Ticket-list.scss';
import 'antd/dist/antd.css';

import Ticket from '../ticket';

class TicketList extends React.Component {
  constructor(props) {
    super(props);

    this.sortTickets = (tickets, sort) => {
      switch (sort) {
        case actions.SORT_CHEAPEST_FIRST:
          tickets.sort((ticketPrev, ticketNext) => ticketPrev.price - ticketNext.price);
          break;
        case actions.SORT_FASTEST_FIRST:
          tickets.sort(
            (ticketPrev, ticketNext) =>
              ticketPrev.segments.reduce((total, next) => ({
                duration: total.duration + next.duration,
              })).duration -
              ticketNext.segments.reduce((total, next) => ({
                duration: total.duration + next.duration,
              })).duration,
          );
          break;
        default:
      }
    };

    this.filterTickets = (tickets, transfers) => {
      return tickets.filter((ticket) =>
        transfers.some((transfer) =>
          ticket.segments.map((direction) => direction.stops.length).includes(transfer),
        ),
      );
    };
  }

  async componentDidMount() {
    const { searchId, fetchSearchId, fetchTickets } = this.props;

    if (!searchId) {
      const newSearchIdObject = await fetchSearchId();
      const newSearchId = newSearchIdObject.searchId;
      let stop = false;

      while (!stop) {
        const result = await fetchTickets(newSearchId);
        stop = result.stop;
      }
    }
  }

  render() {
    const { tickets, sort, transfers } = this.props;
    if (!tickets) {
      return null;
    }

    let filteredTickets = this.filterTickets(tickets, transfers);
    if (!filteredTickets.length) {
      return <Alert message="Рейсов, подходящих под заданные фильтры, не найдено" type="info" />;
    }
    this.sortTickets(filteredTickets, sort);

    const ticketsData = filteredTickets.map((ticket, index) => {
      return <Ticket {...ticket} key={index} />;
    });

    return <ul className="ticket-list">{ticketsData}</ul>;
  }
}

const mapStateToProps = (state) => {
  return {
    tickets: getTickets(state),
    searchId: getSearchId(state),
    sort: getSort(state),
    transfers: getTransfers(state),
  };
};

export default connect(mapStateToProps, actions)(TicketList);
