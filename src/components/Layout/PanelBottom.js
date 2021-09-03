import {Fragment, useContext } from 'react';
import classes from './PanelBottom.module.css';
import mainMicrophone from '../../assets/main_microphone.png';
import mainTime from '../../assets/main_time.png';
import Toggle from '../common/Toggle.component';
import AppContext from '../../store/app-context';
import p5 from "p5"
// import "p5/lib/addons/p5.sound"
// import p5 from 'https://cdn.skypack.dev/p5'
// import 'https://cdn.skypack.dev/p5/lib/addons/p5.sound'

const PanelBottom = props => {

    let osc;

    const appCtx = useContext(AppContext);
    
    const checkMicrophoneIsCheckedHandler = () => {
        appCtx.setMicrophoneChecked(true);
    };

    const uncheckMicrophoneIsCheckedHandler = () => {
        appCtx.setMicrophoneChecked(false);
    };

    const playHandler = () => {
        console.log("playHandler");

        // // A triangle oscillator
        // osc = new p5.TriOsc();
        // // Start silent
        // osc.start();
        // osc.amp(0);

        // playNote("A", 4000);
    }

    // A function to play a note
function playNote(note, duration) {
    // osc.freq(440);
    // // Fade it in
    // osc.fade(0.5,0.2);
  
    // // If we sest a duration, fade it out
    // if (duration) {
    //   setTimeout(function() {
    //     osc.fade(0,0.2);
    //   }, duration-50);
    // }
  }

    return <Fragment>
        <header className={classes.header}>
            <div>
                <table className={classes.buttonWrapper}>
                <tbody>
                    <tr>
                        <td className={classes.buttonCenter}>
                            <a onClick={props.onShowModal}><img src={mainTime} /></a>
                            <a onClick={playHandler}>Play</a>
                        </td>
                        <td className={classes.buttonCenter}>
                            <Toggle 
                                onCheck={checkMicrophoneIsCheckedHandler} 
                                onUncheck={uncheckMicrophoneIsCheckedHandler}
                                imgScr={mainMicrophone}
                            />
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </header>
    </Fragment>
};

export default PanelBottom;