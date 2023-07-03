import React, { Component } from "react";
import PropTypes from "prop-types";
import { MainConsumer } from "../MainContext";
import ToggleSwitch from "./ToggleSwitch";
import OptionsSelect from "./OptionsSelect";
import SettingsSlider from "./SettingsSlider";
import SettingsRange from "./SettingsRange"
import "./SettingsItem.css";

class SettingsItem extends Component {
  render() {
    const { label, iconClass, type, onUpdate, value, options } = this.props;
    return (
      <React.Fragment>
        <MainConsumer>
          {({ settings, toggleDebugCtlMode }) => (
            <div className="item">
              <div className="label">
                <i className={`icon fas ${iconClass}`} />
                {label}
              </div>
              <div className="value-component">
                {type === "switch" && (
                  <React.Fragment>
                    <div className="text">{value ? "on" : "off"}</div>
                    <ToggleSwitch value={value} modifyingFunction={onUpdate} />
                  </React.Fragment>
                )}

                {type === "select" && (
                  <React.Fragment>
                    <OptionsSelect
                      value={value}
                      modifyingFunction={onUpdate}
                      options={options}
                    />
                  </React.Fragment>
                )}

                {type === "slider" &&
                 <SettingsSlider label={label} value={value} modifyingFunction={onUpdate} options={options}/>
                }
                {type === "range" && <SettingsRange label={label} value={value} modifyingFunction={onUpdate} options={options}/>}

              </div>
            </div>
          )}
        </MainConsumer>
      </React.Fragment>
    );
  }
}
SettingsItem.propTypes = {
  label: PropTypes.string.isRequired,
  iconClass: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["switch", "select", "slider", "range"]).isRequired,
  onUpdate: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
    PropTypes.bool
  ]).isRequired,
  options: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

export default SettingsItem;
