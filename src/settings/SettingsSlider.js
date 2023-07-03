import React, { Component } from "react";
import Slider from "rc-slider";
import PropTypes from "prop-types";
import "./SettingsSlider.css";

class SettingsSlider extends Component {
  constructor(props) {
    super(props);
    // initialize the tmpValue with the value from
    // props (i.e. coming from main context )
    this.state = {
      tmpValue: this.props.value
    };
  }
  onSliderChange = value => {
    this.setState({
      tmpValue: value
    });
  };
  onAfterChange = func => {
    func(this.state.tmpValue);
  };
  getUnit = e => {
    if (e.toUpperCase().indexOf("VOLTAGE") > -1) {
      return "V";
    } else if (e.toUpperCase().indexOf("TEMPERATURE") > -1) {
      return "C";
    }
  };
  render() {
    const { label, modifyingFunction } = this.props;
    return (
      <div className="slider-component">
        <div className="sliderValue">{`${this.state.tmpValue} ${this.getUnit(
          label
        )}`}</div>
        <Slider
          trackStyle={{ backgroundColor: "#c714c2", height: "10px" }}
          value={this.state.tmpValue}
          min={this.props.options.min}
          max={this.props.options.max}
          step={this.props.options.step}
          onChange={this.onSliderChange}
          onAfterChange={() => this.onAfterChange(modifyingFunction)}
          railStyle={{ height: "10px" }}
          handleStyle={{ height: "20px", width: "20px" }}
        />
      </div>
    );
  }
}

SettingsSlider.propTypes = {
  label: PropTypes.string,
  value: PropTypes.number.isRequired,
  modifyingFunction: PropTypes.func.isRequired,
  options: PropTypes.object.isRequired
};
export default SettingsSlider;
