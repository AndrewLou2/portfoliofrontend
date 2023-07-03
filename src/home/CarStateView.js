import React, { Component } from 'react';
import { MainConsumer } from '../MainContext';
import Blink from '../components/Blink';
import CtrlButton from '../components/CtrlButton';
import './CarStateView.css'
// Images
import IMG_headlights from '../assets/status/headlights.png';
import IMG_car from '../assets/status/newCar.png';
import IMG_LeftHeadlight from '../assets/LF.png';
import IMG_RightHeadlight from '../assets/RF.png';
import IMG_LeftSignal from '../assets/status/left-turn-signalNEW.png';
import IMG_RightSignal from '../assets/status/right-turn-signalNEW.png';
import IMG_RearLights from '../assets/status/rear-lights.png';
import IMG_LeftRearLights from '../assets/LB.png';
import IMG_RightRearLights from '../assets/RB.png';

class CarStateView extends Component {
    render() {
        return (
                <div className="car-state-view">
                    <MainConsumer>
                        {({ settings }) => (
                            <div className="debug-mode">
                                {settings.debugCtlMode &&
                                    <div className="control-board">
                                        <div className="left-turn-sigal-button">
                                            <CtrlButton type={'toggle'} name={'leftTurn'} offName={'rightTurn'}>
                                                <i className="fas fa-caret-square-left" />
                                            </CtrlButton>
                                        </div>
                                        <div className="right-turn-signal-button">
                                            <CtrlButton type={'toggle'} name={'rightTurn'} offName={'leftTurn'}>
                                                <i className="fas fa-caret-square-right"/>
                                            </CtrlButton>
                                        </div>
                                        <div className="headlights-button">
                                            <CtrlButton type={'toggle'} name={'headLights'}>
                                                <i className="fas fa-lightbulb" />
                                            </CtrlButton>
                                        </div>
                                        <div className="horn-button">
                                            <CtrlButton type={'push'} name={'horn'}>
                                                <i className="fas fa-bullhorn"/>
                                            </CtrlButton>
                                        </div>
                                        <div className="rear-lights-button">
                                            <CtrlButton type={'push'} name={'brakeLights'}>
                                                <i className="fas fa-hand-paper" />
                                            </CtrlButton>
                                        </div>
                                    </div>
                                }
                            </div>
                        )}
                    </MainConsumer>
                    <MainConsumer>
                        {({ carStatus }) => (
                            <div className="sun-car">
                                <img src={IMG_car}/>
                                {carStatus.headLights && 
                                    <div className="head-lights">
                                        <img className="headlights" src={IMG_headlights}/>
                                        <img className="Lheadlight" src={IMG_LeftHeadlight}/>
                                        <img className="Rheadlight" src={IMG_RightHeadlight}/>
                                    </div>}

                                {(carStatus.leftTurn || carStatus.hazardLights) && (
                                    <Blink>
                                        <div className="left-turn-signal">
                                            <img className="left-signal" src={IMG_LeftSignal}/>
                                        </div>
                                    </Blink>
                                )}
                                {(carStatus.rightTurn || carStatus.hazardLights) && (
                                    <Blink>
                                        <div className="right-turn-signal">
                                            <img className="right-signal" src={IMG_RightSignal}/>
                                        </div>
                                    </Blink>
                                )}
                                {carStatus.hazardLights && (
                                    <Blink>
                                        <div className="brake-lights">
                                            <img className="rear-lights" src={IMG_RearLights}/>
                                            <img className="Lrearlight" src={IMG_LeftRearLights}/>
                                            <img className="Rrearlight" src={IMG_RightRearLights}/>
                                        </div>
                                    </Blink>
                                )}
                                {carStatus.brakeLights && !carStatus.hazardLights && (
                                    <div className="brake-lights">
                                        <img className="rear-lights" src={IMG_RearLights}/>
                                        <img className="Lrearlight" src={IMG_LeftRearLights}/>
                                        <img className="Rrearlight" src={IMG_RightRearLights}/>
                                    </div>
                                )}

                                {carStatus.horn && (
                                    <div className="horn">
                                        <i className="fas fa-volume-up" />

                                    </div>
                                )}

                                {carStatus.relayA && <div className="realy-a">Relay A</div>}
                                {carStatus.realyB && <div className="relay-b">Relay B</div>}
                            </div>
                        )}
                    </MainConsumer>
            </div>
        );
    }
}

export default CarStateView;

/*export const CarStateView = () => {
    return(
        <div className="simulator-container">

        </div>
    )
}*/