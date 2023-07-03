import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MainProvider } from './MainContext';
import TopBar from './layout/TopBar';
import SideNavBar from './layout/SideNavBar';
import HomeTab from './tabs/HomeTab';
import NavigationTab from './tabs/NavigationTab';
import TelemetryTab from './tabs/TelemetryTab';
import CameraTab from './tabs/CameraTab';
import SettingsTab from './tabs/SettingsTab';
import ControlBoardContainer from './containers/ControlBoardContainer';

import './App.css';
class App extends Component {
  render() {
    const { carStatus } = this.props;
    return (
      <div className="app">
        <MainProvider>
          <TopBar />
          <Router>
            <SideNavBar />
            <div className="content">
              {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
              <Switch>
                <Route exact path="/home">
                  <HomeTab />
                </Route>
                <Route exact path="/navigation">
                  <NavigationTab />
                </Route>
                <Route exact path="/telemetry">
                  <TelemetryTab />
                </Route>
                <Route exact path="/camera">
                  <CameraTab />
                </Route>
                <Route exact path="/settings">
                  <SettingsTab />
                </Route>
              </Switch>
            </div>
          </Router>
        </MainProvider>
      </div>
    );
  }
}
export default App;
