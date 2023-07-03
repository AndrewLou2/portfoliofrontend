import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

class SideNavButton extends Component {
  render() {
    const { label, iconClass, path } = this.props;
    return (
      <React.Fragment>
        <li className="nav-item">
          <NavLink activeClassName="active" className="nav-link" to={path}>
            <i className={`icon fas ${iconClass}`}></i>
            <div className="label">{label}</div>
          </NavLink>
        </li>
      </React.Fragment>
    );
  }
}

SideNavButton.propTypes = {
  label: PropTypes.string,
  iconClass: PropTypes.string,
  path: PropTypes.string
};

export default SideNavButton;
