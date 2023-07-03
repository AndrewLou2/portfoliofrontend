import React, { createContext } from 'react';
// import backendService from '../BackendService';

const WS_SERVER_PORT = process.env.REACT_APP_WS_SERVER_PORT || '8887';
const WS_SERVER_HOST = process.env.REACT_APP_WS_SERVER_HOST || 'localhost';
const WS_SERVER_URI = `ws://${WS_SERVER_HOST}:${WS_SERVER_PORT}`;

const MSG_TYPE = {
  carStatus: 'car-status',
  bluetooth: 'bluetooth'
};

const mockBPS = [
  {
    voltage: 6.7, // volts
    temp: 30      // celcius 
  },
  {
    voltage: -1, // volts
    temp: 30      // celcius 
  },
  {
    voltage: 20, // volts
    temp: 30      // celcius 
  },
  {
    voltage: 6.7, // volts
    temp: 30      // celcius 
  },
  {
    voltage: 6, // volts
    temp: 30      // celcius 
  },
  {
    voltage: 6.7, // volts
    temp: 36      // celcius 
  },
  {
    voltage: 6.7, // volts
    temp: 30      // celcius 
  },
  {
    voltage: -2, // volts
    temp: 30      // celcius 
  },
  {
    voltage: 6.7, // volts
    temp: 37      // celcius 
  },
  {
    voltage: -1, // volts
    temp: 30      // celcius 
  },
  {
    voltage: 6.7, // volts
    temp: 38      // celcius 
  },
  {
    voltage: 30, // volts
    temp: 30      // celcius 
  },
  {
    voltage: 6.7, // volts
    temp: 30      // celcius 
  },
  {
    voltage: 6.7, // volts
    temp: 30      // celcius 
  },
  {
    voltage: 30, // volts
    temp: 30      // celcius 
  },
  {
    voltage: 6.7, // volts
    temp: 30      // celcius 
  },
  {
    voltage: 630, // volts
    temp: 30      // celcius 
  },
  {
    voltage: 6.7, // volts
    temp: 30      // celcius 
  },
  {
    voltage: 6.7, // volts
    temp: 30      // celcius 
  },
  {
    voltage: 6.7, // volts
    temp: 34      // celcius 
  },
  {
    voltage: -2, // volts
    temp: 30      // celcius 
  },
  {
    voltage: 6.7, // volts
    temp: 30      // celcius 
  },
  {
    voltage: -2, // volts
    temp: 30      // celcius 
  },
  {
    voltage: 6.7, // volts
    temp: 30      // celcius 
  },
  {
    voltage: 6.7, // volts
    temp: 30      // celcius 
  },
  {
    voltage: 6.7, // volts
    temp: 30      // celcius 
  },
  {
    voltage: 6.7, // volts
    temp: 30      // celcius 
  },
  {
    voltage: 6.7, // volts
    temp: 36      // celcius 
  },
  {
    voltage: 20, // volts
    temp: 30      // celcius 
  },
  {
    voltage: 6.7, // volts
    temp: 36      // celcius 
  },
  {
    voltage: 6.7, // volts
    temp: 30      // celcius 
  },
  {
    voltage: 6.7, // volts
    temp: 30      // celcius 
  },
  {
    voltage: 6.7, // volts
    temp: 30      // celcius 
  },
  {
    voltage: 6.7, // volts
    temp: 30      // celcius 
  }];


export const MainContext = createContext({
  carStatus: {},
  bps: [],
  settings: {},
  toggleDebugCtlMode: () => {},
  updateVoltageTolerance: () => {},
  selectTestOptions: () => {},
  sendCarStatus: () => {},
  updateDangerTemp: () => {}
});

export class MainProvider extends React.Component {

  constructor() {
    super();

    // Open websocket and listen to messages
    this.connection = new WebSocket(WS_SERVER_URI);

    /**
     * Handle incomming websocket messages.
     * Each message is should have two properties:
     *    - 'type' => specifies the type of the message (see MSG_TYPE constant)
     *    - 'payload' => payload data object (structure depends on message type)
     */
    this.connection.onmessage = event => {
      const { data } = event;
      const msg = JSON.parse(data);
      console.log('MainProvider: onMessage: msg=', msg);

      switch (msg.type) {
        case MSG_TYPE.carStatus:
          this.handleCarStatusMsg(msg.payload);
          break;
        case MSG_TYPE.bluetooth:
          this.handleBluetoothMsg(msg.payload);
          break;
        default:
          console.warn(`MainProvider: Unknown message type: "${msg.type}"!`);
          break;
      }

      
    };
  }

  handleCarStatusMsg(carStatus) {
    const newState = { ...this.state, carStatus: carStatus, bps: mockBPS };
    // console.log('MainProvider: handleCarStatusMsg: newState=', newState);
    this.setState(newState);
  }

  // TODO
  handleBluetoothMsg(data) {
    console.log('handleBluetoothMsg',data);
  }

  /*****************************************************************************
   * FUNCTIONS THAT CHANGE THE CONTEXT STATE:
   ****************************************************************************/

  /**
   * Sends the car status object to the backend server, and subsequently to the
   * CAN bus
   */
  sendCarStatus = newCarStatus => {
    const json = {
      type: MSG_TYPE.carStatus,
      payload: newCarStatus
    };
    this.connection.send(JSON.stringify(json));
  };

  toggleDebugCtlMode = () => {  
    const { settings } = this.state;
    settings.debugCtlMode = !settings.debugCtlMode;
    const newState = { ...this.state, settings };
    this.setState(newState);
    // console.log('toggleDebugCtlMode', settings.debugCtlMode);
  };
  updateVoltageTolerance = newVoltageTolerance => {
      const { settings } = this.state;
      settings.voltageTolerance = newVoltageTolerance;
      const newState = { ...this.state,settings};
      this.setState(newState);
    //   console.log('Voltage', settings.voltageTolerance);
  }
  selectTestOptions = selectedValue => {
    const {settings} = this.state;
    settings.testOptions = selectedValue;
    const newState = {...this.state,settings};
    this.setState(newState);
    // console.log("selected:", settings.testOptions );
  }
  updateDangerTemp = newDangerTemp => {
    const { settings } = this.state;
    settings.dangerTemp = newDangerTemp;
    const newState = { ...this.state,settings};
    this.setState(newState);
    // console.log('danger temp', settings.dangerTemp);
}
  state = {
    carStatus: {
      leftTurn: false,
      rightTurn: false,
      headLights: false,
      brakeLights: false,
      hazardLights: false,
      horn: false,
      relayA: false,
      relayB: false,
      relayC: false
    },
    bps: mockBPS, // TODO: don't use mock data
    settings: {
      debugCtlMode: false, // enables the controls on the car-state-view
      voltageTolerance: [5, 20],
      testOptions: 'option 1',
      dangerTemp: 20
    },
    toggleDebugCtlMode: this.toggleDebugCtlMode,
    sendCarStatus: this.sendCarStatus,
    updateVoltageTolerance: this.updateVoltageTolerance,
    selectTestOptions: this.selectTestOptions,
    updateDangerTemp: this.updateDangerTemp
  };

  render() {
    return (
      <MainContext.Provider value={this.state}>
        {this.props.children}
      </MainContext.Provider>
    );
  }
}

export const MainConsumer = MainContext.Consumer;
