import React, { Component } from 'react';
import CtrlButton from '../components/CtrlButton';
import './ControlBoardContainer.css';

class ControlBoardContainer extends Component {
  handleClick = event => {
    const btn = event.target;
    console.log('handle click: ', btn.value);
  };

  render() {
    return (
      <div className="control-board">
        <div className="container">
          
          {/* First row */}
          <div className="row">
            <div className="col-sm">
              <CtrlButton type={'toggle'} name={'leftTurn'} offName={'rightTurn'}>
                Left Signal <br/><i className="fas fa-arrow-left" />
              </CtrlButton>
            </div>

            <div className="col-sm">
              <CtrlButton type={'toggle'} name={'rightTurn'} offName={'leftTurn'}>
                Right Signal <br/><i className="fas fa-arrow-right" />
              </CtrlButton>
            </div>
          </div>

          {/* Second row */}
          <div className="row">
            <div className="col-sm">
              <CtrlButton type={'toggle'} name={'horn'}>
                Horn &nbsp; <i className="fas fa-bullhorn" />
              </CtrlButton>
            </div>
          </div>

          {/* Third row */}
          <div className="row">
            <div className="col-sm">
              <CtrlButton type={'toggle'} name={'headLights'}>
                Head<br />Lights
              </CtrlButton>
            </div>

            <div className="col-sm">
              <CtrlButton type={'toggle'} name={'brakeLights'}>
                Brake Lights
              </CtrlButton>
            </div>

            <div className="col-sm">
              <CtrlButton type={'toggle'} name={'hazardLights'} disableNames={['leftTurn', 'rightTurn']}>
                Hazard Lights
              </CtrlButton>
            </div>
          </div>

          {/* Fourth row */}
          <div className="row">
            <div className="col-sm">
              <CtrlButton type={'toggle'} name={'relayA'}>
                Relay A
              </CtrlButton>
            </div>

            <div className="col-sm">
              <CtrlButton type={'toggle'} name={'relayB'}>
                Relay B
              </CtrlButton>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ControlBoardContainer;
