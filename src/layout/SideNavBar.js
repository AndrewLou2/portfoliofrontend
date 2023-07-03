import React, { Component } from 'react';
import SideNavButton from './SideNavButton';
import './SideNavBar.css';

class TopBar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="side-nav-bar">
          <ul className="nav flex-column justify-content-center">
            <SideNavButton 
                label="Home" 
                path="/home" 
                iconClass="fa-car-side"
            />
            <SideNavButton
              label="Navigation"
              path="/navigation" 
              iconClass="fa-directions" 
            />
            <SideNavButton
              label="Telemetry"
              path="/telemetry"
              iconClass="fa-chart-bar"
            />
            <SideNavButton
              label="Camera"
              path="/camera" 
              iconClass="fa-video" 
            />
            <SideNavButton
              label="Settings"
              path="/settings"
              iconClass="fa-cog"
            />

            {/**
            <li className="nav-item">
              <NavLink
                activeClassName="active"
                className="nav-link"
                to="/controlBoard"
              >
                <i className="icon fas fa-tools"></i>
                <div className="label">Controls</div>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassName="active" className="nav-link" to="/map">
                <i className="icon fas fa-map-marked-alt"></i>
                <div className="label">Map</div>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="active"
                className="nav-link"
                to="/music"
              >
                <i className="icon fas fa-music"></i>
                <div className="label">Music</div>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="active"
                className="nav-link"
                to="/camera"
              >
                <i className="icon fas fa-video"></i>
                <div className="label">Camera</div>
              </NavLink>
            </li>
            **/}
          </ul>
        </nav>
      </React.Fragment>
    );
  }
}

export default TopBar;
