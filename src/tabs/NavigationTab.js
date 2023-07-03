import React, { Component } from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import LocateControl from './LocateControl';
import './NavigationTab.css';

class NavigationTab extends Component {
    constructor() {
        super()
        this.state = {
            lat: 43.0049,
            lng: -81.2754,
            zoom: 18,  
        }
    }

    render() {
        const position = [this.state.lat, this.state.lng];
        const locateOptions = {
            position: 'topleft',
            flyto: 'true',
            strings: {
                title: "Show my location"
            },
            onActivate: () => {}
        }

        return (
            <div className="navigation-tab">
                <Map center={position} zoom={this.state.zoom}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position} className="sunstangs-position">
                        <Popup>
                            Sunstangs Home <br /> Lat: {this.state.lat} <br /> Lng: {this.state.lng}
                        </Popup>
                    </Marker>
                    <LocateControl options={locateOptions} startDirectly className="locate-control"/>
                </Map>
            </div>
        );
    }
}

//ReactDOM.render(<NavigationTab />, document.getElementById('container'))

export default NavigationTab;
