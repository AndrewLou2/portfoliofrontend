import React, { Component } from "react";
import PropTypes from "prop-types";
import "./OptionsSelect.css";

class OptionsSelect extends Component {
  constructor() {
    super();
    this.state = {
      clicked: false
    };
  }
  openMenu(e) {
    this.setState({
      clicked: true
    });
  }
  handleClick = (func, value) => {
    func(value);
    this.setState({
      clicked: false
    });
  };

  render() {
    const { value, modifyingFunction, options } = this.props;
    return (
      <div className="select">
        <div className="text" onClick={this.openMenu.bind(this)}>
          {value}
        </div>
        <i
          onClick={this.openMenu.bind(this)}
          className="fas fa-chevron-right"
        />
        <div
          className={
            this.state.clicked ? "options-page-open" : "options-page-closed"
          }
        >
          {options.map((optionsValue, index) => {
            return (
              <li
                className="select-text"
                onClick={() =>
                  this.handleClick(modifyingFunction, optionsValue)
                }
                key={index}
              >
                {optionsValue}
              </li>
            );
          })}
        </div>
      </div>
    );
  }
}
OptionsSelect.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array
  ]).isRequired,
  modifyingFunction: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired
};

export default OptionsSelect;
