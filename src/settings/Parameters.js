import React, { Component } from "react";
import PropTypes from "prop-types";
import Popup from "reactjs-popup";
import "./Parameters.css";

class Parameters extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    // setState to change values
    this.setState({
      value: parseInt(e.target.value)
    });
  }
  handleSubmit(func) {
    //Submit button
    func(this.state.value);
  }

  render() {
    const { label, value, modifyingFunction } = this.props;
    return (
      <Popup
        trigger={
          <div className="box">
            <div className="item">{label}</div>
            <div className="value">{value}</div>
          </div>
        }
        on="click"
        modal
        closeOnDocumentClick
      >
        <div>
          {/* Start of Popup contents*/}
          <div>
            <div>
              <div className="popup-title">{label}</div>
              <div className="popup-value">
                value{" "}
                <input
                  className="text-box"
                  type="text"
                  value={this.state.value}
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </div>
          <div>
            <button
              type="button"
              className="button"
              onClick={() => this.handleSubmit(modifyingFunction)}
            >
              Submit
            </button>
          </div>
          {/* End of Popup contents*/}
        </div>
      </Popup>
    );
  }
}
Parameters.propTypes = {
  label: PropTypes.string,
  value: PropTypes.number
};

export default Parameters;
