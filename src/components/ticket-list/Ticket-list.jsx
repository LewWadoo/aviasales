import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import './Ticket-list.scss';

import Ticket from '../ticket';

class TicketList extends React.Component {
  componentDidMount() {
    this.fetchTickets();
  }

  constructor(props) {
    super(props);

    this.fetchTickets = () => {
      const { fetchSearchId, fetchTickets } = this.props;
      fetchSearchId().then(({ searchId }) => {
        fetchTickets(searchId);
      });
    };
  }

  // const = useCallback(fetchSearchId, [fetchSearchId])
  // useEffect(() => {
  //   fetchSearchIdCallback();
  // }, [fetchSearchIdCallback]);

  render() {
    const { tickets } = this.props;
    //         // eslint-disable-next-line no-console
    console.log('in ticket-list: tickets', this.props, tickets !== undefined);

    const ticketsData =
      tickets !== '' && tickets !== undefined
        ? tickets.map((ticket, index) => {
            return <Ticket {...ticket} key={index} />;
          })
        : null;

    return <ul className="ticket-list">{ticketsData}</ul>;
  }
}

const mapStateToProps = (state) => {
  return {
    tickets: state.tickets,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return { onFetchSearchId: () => dispatch(actions.fetchSearchId())};
// };

export default connect(mapStateToProps, actions)(TicketList);
