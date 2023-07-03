import React, { Component } from 'react';
//import Scrubber from './Scrubber.js';
import './MusicPlayer.css';

class MusicPlayer extends Component {

    constructor(props){
        super(props);
        this.state = {
            track: {
                name: "You Belong with Me",
                artist: "Taylor Swift",
                duration: 0,
                source: " "
                },
            playStatus: " ",
            currentTime: 0
        };

        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.setState(/*nextTrack*/); /*setting state corresponding to teh track data*/ 
        this.setState(this.getInitialState);
    }
   
    getInitialState() {
        return { playStatus: 'play', currentTime: 0}
    }

    updateTime(timestamp) {
        timestamp = Math.floor(timestamp);
        this.setState({ currentTime: timestamp });
    }

    togglePlay() {
        let status = this.state.playStatus
        let audio = document.getElementById('audio');
        if(status === 'play') {
            status = 'pause'; 
            audio.play();
            
        } else {
            status = 'play'; 
            audio.onpause();
        }
        this.setState({ playStatus: status});
    }

    nextSong(e) {
        /* TODO */
        return;
    }

    prevSong(e) {
        /* TODO */
        return;
    }

    playStatusResponse(e) {
        /* TODO */
        this.togglePlay();
        return;
    }

    convertTime(timestamp) {
        let minutes = Math.floor(timestamp/60);
        let seconds = timestamp - (minutes*60);
        if (seconds < 10) { 
            seconds = '0' + seconds; 
        }
        timestamp = minutes + ':' + seconds;
        return timestamp;
    }

    render() {

        let oppositeState;
        if (this.state.playStatus === 'play') {
            oppositeState = 'fa-pause';
        } else {
            oppositeState = 'fa-play';
        }

        return (
            <React.Fragment>
                <div className="music-player">                    
                    <React.Fragment>
                        <ul className="controls">
                            <button className="step-backward-button" onClick={this.prevSong}>
                                <i className="fas fa-step-backward"></i>
                            </button>
                            <button className="pause-play-button" onClick={this.playStatusResponse}>
                                <i className={`fas ${oppositeState}`}></i>
                            </button>
                            <button className="step-forward-button" onClick={this.nextSong}>
                                <i className="fas fa-step-forward"></i>
                            </button>
                        </ul>
                        <div className="track-information" >
                        <div className="track-info">{this.state.track.name} - {this.state.track.artist}</div>
                    </div>
                    </React.Fragment>
                    {/*<Scrubber />*/}
                    {/*<div className="timestamps">
                        <div className="time-current">{this.convertTime(this.state.currentTime)}</div>
                        <div className="time-sep"> / </div>
                        <div className="time-total">{this.convertTime(this.state.track.duration)}</div>
                    </div>*/}
                    <audio><source/></audio>            
                </div>
            </React.Fragment>
        );
    }
}

export default MusicPlayer;