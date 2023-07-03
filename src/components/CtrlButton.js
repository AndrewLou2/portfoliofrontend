import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MainConsumer } from '../MainContext';
import './CtrlButton.css';

class CtrlButton extends Component {

  isDisabled(carStatus, disableNames) {
    let isDisabled = false;
    disableNames.forEach(n => {
      if (carStatus[n]) {
        isDisabled = true;
      }
    });
    return isDisabled;
  }

  /**
   * Send updated status to backend with the property @name toggled
   * @param {*} carStatus 
   * @param {*} sendCarStatus
   */
  handleClick(carStatus, sendCarStatus) {
    const { name, type, offName, disableNames } = this.props;

    // Handle click event only for a CtrlButton of type 'toggle'
    if (type !== 'toggle') {
      return;
    }
    
    if (Array.isArray(disableNames) && this.isDisabled(carStatus, disableNames)) {
      return;
    }

    const newCarStatus = { ...carStatus }; // Copy carStatus in a new object
    newCarStatus[name] = !carStatus[name]; // Toggle the car status variable

    if (offName && newCarStatus[name]) {
      newCarStatus[offName] = false;
    }

    sendCarStatus(newCarStatus);
  }

  /**
   * Send updated status to backend with the property @name as true
   * @param {*} carStatus 
   * @param {*} sendCarStatus 
   */
  handleMouseDown(carStatus, sendCarStatus) {
    const { name, type } = this.props;
    
    // Handle click event only for a CtrlButton of type 'push'
    if (type !== 'push') {
      return;
    }
    console.log('mouse-down');
    
    const newCarStatus = { ...carStatus }; // Copy carStatus in a new object
    newCarStatus[name] = true;
    sendCarStatus(newCarStatus);
  }

  /**
   * Send updated status to backend with the property @name as false
   * @param {*} carStatus 
   * @param {*} sendCarStatus 
   */
  handleMouseUp(carStatus, sendCarStatus) {
    const { name, type } = this.props;
    
    // Handle click event only for a CtrlButton of type 'push'
    if (type !== 'push') {
      return;
    }
    console.log('mouse-up');
    
    const newCarStatus = { ...carStatus }; // Copy carStatus in a new object
    newCarStatus[name] = false;
    sendCarStatus(newCarStatus);
  }

  render() {
    const { name } = this.props;
    return (
      <React.Fragment>
        <MainConsumer>
          {({ carStatus, sendCarStatus }) => (
            <span
              onClick={() => this.handleClick(carStatus, sendCarStatus)}
              onMouseDown={() => this.handleMouseDown(carStatus, sendCarStatus)}
              onMouseUp={() => this.handleMouseUp(carStatus, sendCarStatus)}
              onTouchStart={() => this.handleMouseDown(carStatus, sendCarStatus)}
              onTouchEnd={() => this.handleMouseUp(carStatus, sendCarStatus)}
              className={`control-button ${
                carStatus[name] ? 'active' : ''
              }`}
            >
              {this.props.children}
            </span>
          )}
        </MainConsumer>
      </React.Fragment>
    );
  }
}
// className={`ctrl-btn btn btn-primary btn-xl btn-block ${
//   carStatus[name] ? 'active' : ''
// }`}
CtrlButton.propTypes = {
  type: PropTypes.oneOf(['push', 'toggle']),
  name:PropTypes.string
};

export default CtrlButton;
