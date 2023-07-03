import React, { Component } from 'react';
import Clock from 'react-live-clock';
import './TopBar.css';

class TopBar extends Component {
  render() {
    return (
      <React.Fragment>
        <header className="top-bar">
          <div className="row">
            <div className="col-sm">
              <i className="fas fa-wifi float-left signal connected" />
            </div>
            <div className="col-sm text-center">
              <Clock className="date" format={'DD MMM YYYY'} ticking={true} />
            </div>
            <div className="col-sm text-right">
              <Clock className="time" format={'hh:mm A'} ticking={true} />
            </div>
          </div>
        </header>
      </React.Fragment>
    );
  }
}

export default TopBar;
