/* eslint-disable no-undef */
import React, { Component } from 'react';
import './SimulatorContainer.css';
import { MainConsumer } from '../MainContext';
import Blink from '../components/Blink';
import CtrlButton from '../components/CtrlButton'

class SimulatorContainer extends Component {
  render() {
    return (
      <div className="simulator-container">
        <MainConsumer>
          {({ carStatus }) => (
            <div className="sun-car">
               <img src={require('../assets/status/newCar.png')}/>
              {carStatus.headLights && <div className="head-lights"></div>}

              {(carStatus.leftTurn || carStatus.hazardLights) && (
                <Blink>
                  <div className="left-turn-signal"></div>
                </Blink>
              )}

              {(carStatus.rightTurn || carStatus.hazardLights) && (
                <Blink>
                  <div className="right-turn-signal"></div>
                </Blink>
              )}

              {carStatus.hazardLights && (
                <Blink>
                  <div className="brake-lights"></div>
                </Blink>
              )}

              {carStatus.brakeLights && !carStatus.hazardLights && (
                <div className="brake-lights"></div>
              )}

              {carStatus.horn && (
                <div className="horn">
                  <i className="fas fa-volume-up" />
                </div>
              )}

              {carStatus.relayA && <div className="relay-a">Relay A</div>}

              {carStatus.relayB && <div className="relay-b">Relay B</div>}
            </div>
          )}
        </MainConsumer>
      </div>
    );
  }
}

export default SimulatorContainer;
