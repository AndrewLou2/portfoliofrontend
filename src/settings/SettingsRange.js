import React, { Component } from "react";
import { Range } from "rc-slider";
import PropTypes from "prop-types";
import "./SettingsRange.css";

class SettingsRange extends Component {
  constructor(props) {
    super(props);
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
      <div className="range-component">
        <div className="rangeValue">
          {this.state.tmpValue[0]} - {`${this.state.tmpValue[1]} ${this.getUnit(label)}`}
        </div>
        <Range
          allowCross={false}
          trackStyle={[{ backgroundColor: "#c714c2", height: "10px" }]}
          value={this.state.tmpValue}
          min={this.props.options.min}
          max={this.props.options.max}
          step={this.props.options.step}
          onChange={this.onSliderChange}
          onAfterChange={() => this.onAfterChange(modifyingFunction)}
          railStyle={{ height: "10px" }}
          handleStyle={[
            { height: "20px", width: "20px" },
            { height: "20px", width: "20px" }
          ]}
        />
      </div>
    );
  }
}
SettingsRange.propTypes = {
  label: PropTypes.string,
  value: PropTypes.array.isRequired,
  modifyingFunction: PropTypes.func.isRequired,
  options: PropTypes.object.isRequired
};
export default SettingsRange;
