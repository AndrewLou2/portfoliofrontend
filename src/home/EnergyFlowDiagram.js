import React, { Component } from 'react';
import Battery from './Battery.js';
import './EnergyFlowDiagram.css';
import './EnergyFlowDiagram.css'
import Sun from '../assets/sun.png';
import SolarPanel from '../assets/solar-panel.png';
import SunRays from '../assets/sun-ray.gif';
import CarFlow from '../assets/car-energy.png';

class EnergyFlowDiagram extends Component { /*container component that will hold the sun, 
    solar panel, battery, and car inside the home tab*/
    render() {
        return (            
            <div className="engergy-flow-diagram">
                <img src={Sun} alt="sun" className="sun" /> 
                <img src={SunRays} alt="sun rays" className="sun-rays" />               
                <img src={SolarPanel} alt="solar panel" className="solar-panel" />
                <Battery className="battery" />
                <img src={CarFlow} alt="solar car" className="car-flow" />    
            </div>       
        );
    }
}
// <img src={Battery} alt='battery' class='battery'/>
export default EnergyFlowDiagram;