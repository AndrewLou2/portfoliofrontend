import React, { Component } from 'react';
import './BatteryCell.css';
import PropTypes from 'prop-types';

const VOLTMIN = 0;
const VOLTMAX = 10;
const TEMPMAX = 30;

class BatteryCell extends Component {

  getColourBasedOnVoltage(volt, temp) {
    if (temp > TEMPMAX) {
      return '#ED2415';
    }
    if (volt > VOLTMAX) {
      return '#D4C350';
    }
    if (volt < VOLTMAX && volt > VOLTMIN) {
      return '#3DA93E';
    }
    if (volt < VOLTMIN) {
      return '#3483EB';
    }
  }
  
  getStyle(volt, temp) {
    return {
      background: this.getColourBasedOnVoltage(volt, temp)
    }
  }

  getCellNumber() {
    let cellNumber = this.props.index + 1;

    if (cellNumber < 10) {
      cellNumber = '0' + cellNumber;
    }
    return cellNumber;
  }

  render() {
    const { volt, temp } = this.props;
    

    return (
      <div className="battery-cell">      
        <div className="battery">
          <div className="battery-level" style={this.getStyle(volt, temp)}>
            <h5 className="head">
                <b>{this.getCellNumber()}</b>
            </h5>
          </div>
        </div>

        <div className="val">
          {volt} V <br />
          {temp} {'\u2103'}
        </div>
      </div>
    );
  }
}

BatteryCell.propTypes = {
  volt: PropTypes.number,
  temp: PropTypes.number,
  index: PropTypes.number
};

export default BatteryCell;
