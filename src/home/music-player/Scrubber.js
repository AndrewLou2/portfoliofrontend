import React, { Component } from 'react';
import TestScrubber from './test-scrubber.png';
import './Scrubber.css';

class Scrubber extends Component {

    render() {
        return (
            <div className="scrubber">
                <img className="scrubber-icon" src={TestScrubber} alt="Scrubber" />
            </div>
        );
    }
}

export default Scrubber;