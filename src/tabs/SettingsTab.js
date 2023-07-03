import React, { Component } from 'react';
import { MainConsumer } from '../MainContext.js';
import SettingsItem from '../settings/SettingsItem.js';
import 'rc-slider/assets/index.css';
import './SettingsTab.css';

class SettingTab extends Component {
  render() {
    const selectOptions = ["option 1", "option 2", "option 3"];
    const sliderOptions = {min: 0, max: 30, step: 5};
    return (
      <React.Fragment>
        <MainConsumer>
          {({ settings, toggleDebugCtlMode, updateVoltageTolerance, selectTestOptions, updateDangerTemp }) => (
            <div className="settings-tab">
              <SettingsItem
                label="debug mode"
                iconClass="fa-bug"
                type="switch"
                onUpdate={toggleDebugCtlMode}
                value={settings.debugCtlMode}
                />
              <SettingsItem
              label="Select Test"
              iconClass="fa-tv"
              type="select"
              onUpdate={selectTestOptions}
              value={settings.testOptions}
              options={selectOptions}
              />
              
              <SettingsItem
              label="Danger Temperature"
              iconClass="fa-thermometer-three-quarters"
              type="slider"
              onUpdate={updateDangerTemp}
              value={settings.dangerTemp}
              options={sliderOptions}
              />
              
              <SettingsItem
              label="Voltage Tolerance"
              iconClass="fa-bolt"
              type="range"
              onUpdate={updateVoltageTolerance}
              value={settings.voltageTolerance}
              options={sliderOptions}
              />
              
              </div>
              )}
              </MainConsumer>
      </React.Fragment>
    );
  }
}

export default SettingTab;
