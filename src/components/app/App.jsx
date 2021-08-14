import React from 'react';

import './App.scss';
import Header from '../header';
import Ticket from '../ticket';
import Checkbox from '../checkbox';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <div className="transfer-options">
          <p className="transfer-options-title">Количество пересадок</p>
          <Checkbox name="all" caption="Все" />
          <Checkbox name="no-transfers" caption="Без пересадок" />
          <Checkbox name="1-transfer" caption="1 пересадка" />
          <Checkbox name="2-transfers" caption="2 пересадки" />
          <Checkbox name="3-transfers" caption="3 пересадки" />
        </div>
        <div className="tickets">
          <div className="sort">
            <button className="sort-button left" autoFocus>
              самый дешевый
            </button>
            <button className="sort-button right">самый быстрый</button>
          </div>
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
