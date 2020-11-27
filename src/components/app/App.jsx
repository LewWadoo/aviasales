import React from 'react';

import './App.scss';
import Header from '../header';
import Ticket from '../ticket';
import TransferOptions from '../transfer-options';

import Sort from '../sort';

function App({ sortCheap, sortFast }) {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <TransferOptions />
        <div className="tickets">
          <Sort />
          <ul className="ticket-list">
            <Ticket />
            <Ticket />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
