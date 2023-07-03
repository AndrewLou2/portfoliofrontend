import React, { Component } from 'react';
import { MainConsumer } from '../../MainContext';
import BatteryCell from './BatteryCell';
import './BPSView.css';

class BPSView extends Component {
  render() {
    return (
      <div className="bps-view">
        <MainConsumer>
          {({ bps }) =>
            bps.map(function(cell, index) {
              return (
                <BatteryCell
                  key={index}
                  index={index}
                  volt={cell.voltage}
                  temp={cell.temp}
                />
              );
            })
          }
        </MainConsumer>
      </div>
    );
  }
}

export default BPSView;
