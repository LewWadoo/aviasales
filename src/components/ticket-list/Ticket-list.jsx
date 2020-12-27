import React from 'react';
import { connect } from 'react-redux';
import { Alert } from 'antd';

import * as actions from '../../actions';
import { SORT_CHEAPEST_FIRST, SORT_FASTEST_FIRST } from '../../action-types.js';
import { getSearchId, getTickets, getSort, getTransfers, getStop } from '../../reducers/reducer';

import './Ticket-list.scss';
import 'antd/dist/antd.css';

import Ticket from '../ticket';

class TicketList extends React.Component {
  constructor(props) {
    super(props);

    this.sortTickets = (tickets, sort) => {
      switch (sort) {
        case SORT_CHEAPEST_FIRST:
          tickets.sort((ticketPrev, ticketNext) => ticketPrev.price - ticketNext.price);
          break;
        case SORT_FASTEST_FIRST:
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

  componentDidMount() {
    const { searchId, fetchSearchId } = this.props;

    if (!searchId) {
      fetchSearchId();
    }
  }

  componentDidUpdate() {
    const { searchId, stop, fetchSearchId, fetchTickets } = this.props;
    if (!searchId) {
      fetchSearchId();
    }

    if (!stop) {
      fetchTickets(searchId);
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

    const ticketsData = filteredTickets.slice(0, 7).map((ticket, index) => {
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
    stop: getStop(state),
  };
};

export default connect(mapStateToProps, actions)(TicketList);
