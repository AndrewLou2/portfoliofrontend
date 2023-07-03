import React, { Component } from "react";
import PropTypes from "prop-types";
import "./ToggleSwitch.css";

class ToggleSwitch extends Component {

  render() {
    const { value, modifyingFunction } = this.props;
    return (
      <div className="toggle-switch">

        <label className="switch">
          <input
            type="checkbox"
            onChange={modifyingFunction}
            checked={value}
          />
          <span className="slider round"></span>
        </label>
      </div>
    );
  }
}

ToggleSwitch.propTypes = {
  value: PropTypes.bool
};

export default ToggleSwitch;
