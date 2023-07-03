import React, { Component } from 'react';
import { MainConsumer } from '../MainContext';
import './Battery.css';


const VOLTMIN = 0;
const VOLTMAX = 10;
const TEMPMAX = 30;

function getColourBasedOnVoltage(cell){
        if (cell.temp > TEMPMAX){
            return "#ED2415"
        }
        if(cell.voltage > VOLTMAX){
           
            return "#D4C350"
        }
        if(cell.voltage < VOLTMAX && cell.voltage > VOLTMIN){
            return "#3DA93E"
        }
        if(cell.voltage < VOLTMIN){
            return "#3483EB"
        }
}

function ColourBorderRight(i,last){
        if (i === last){
            return "5px solid #7E7B79"
        }
}
function ColourBorderLeft(i){
        if (i === 0){
            return "5px solid #7E7B79"
        }
        
}
function handleCheck() {
    alert("CLICKED");
}

class Battery extends Component{
    render(){
        return (
                <div className="battery">
                    <MainConsumer>
                    {({ bps }) => (
                        bps.map(function(cell, index) {
                            const color = getColourBasedOnVoltage(cell);  
                            const borderL = ColourBorderLeft(index);
                            const borderR = ColourBorderRight(index,bps.length-1);
                            const cssStyle = {
                                borderRight: borderR,
                                borderLeft: borderL,            
                                background: color, 
                             };
                            return (
                                <span onClick={handleCheck} key={index} className="cell" style={cssStyle}></span>
                            ) 
                         })
                    )}                     
                    </MainConsumer>
                    <span className="end"></span>
                </div>   
        )
    }
}
export default Battery;
