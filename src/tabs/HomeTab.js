import React, { Component } from 'react';
import BPSView from '../home/bps-view/BPSView';
import MusicPlayer from '../home/music-player/MusicPlayer';
import EnergyFlowDiagram from '../home/EnergyFlowDiagram';
import CarSateView from '../home/CarStateView'; 
import './HomeTab.css';

class HomeTab extends Component {
    render() {
        return (
            <React.Fragment>            
                <div className="home-tab">
                    <div className = "row">
                        <div className="col">
                        {/*    
                            <BPSView />
                        */}
                            <CarSateView />
                        </div>
                        <div className="col">
                            <MusicPlayer />                                            
                            <EnergyFlowDiagram />   
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default HomeTab;
