import React, { Component } from 'react';
import './Blink.css';

class Blink extends Component {
    render() {
        return (
            <div className="blink">
                {this.props.children}
            </div>
        );
    }
}

export default Blink;