import {Fragment, useContext, useState, useEffect} from 'react';
import classes from './PanelTop.module.css';
import mainHand from '../../assets/main_hand.png';
import mainPlay from '../../assets/main_play.png';
import mainOptions from '../../assets/main_options.png';
import Toggle from '../common/Toggle.component';
import AppContext from '../../store/app-context';

const PanelTop = props => {

    const appCtx = useContext(AppContext);
    const [time, setTime] = useState(0);
    const [timerOn, setTimerOn] = useState(false);

    const chartCheckedValue = appCtx.chartCheckedValue;
    const playCheckedValue = appCtx.playCheckedValue;

    const checkPlayHandler = () => {
        appCtx.setPlayChecked(true);
    };
    const uncheckPlayHandler = () => {
        appCtx.setPlayChecked(false);
    };

    const checkChartHandler = () => {
        appCtx.setChartChecked(true);
    };
    const uncheckChartHandler = () => {
        appCtx.setChartChecked(false);
    };

    useEffect(() => {
        let interval = null;
    
        if (timerOn) {
          interval = setInterval(() => {
            setTime((prevTime) => prevTime + 10);
          }, 10);
        } else if (!timerOn) {
          clearInterval(interval);
        }

        
        // 
    
        return () => clearInterval(interval);
      }, [timerOn]);

      useEffect(() => {
        appCtx.setCurrentPlayTime(time);
        // console.log(time, '- Has changed')
        },[time]) // <-- here put the parameter to listen

    return <Fragment>
        <header className={classes.header}>
            <div>
                <table className={classes.buttonWrapper}>
                    <tr>
                        <td className={classes.buttonCenter}>
                            <Toggle 
                                initVal={chartCheckedValue}
                                onCheck={checkChartHandler} 
                                onUncheck={uncheckChartHandler}
                                imgScr={mainHand}
                            />
                        </td>
                        <td className={classes.buttonCenter}>
                            {/* <Toggle 
                                initVal={playCheckedValue}
                                onCheck={checkPlayHandler} 
                                onUncheck={uncheckPlayHandler}
                                imgScr={mainPlay}
                            /> */}

                            {!timerOn && time === 0 && (
                                <button onClick={() => setTimerOn(true)}>Start</button>
                            )}
                            {timerOn && <button onClick={() => setTimerOn(false)}>Stop</button>}
                            {!timerOn && time > 0 && (
                                <button onClick={() => appCtx.setCurrentPlayTime(0)}>Reset</button>
                            )}
                            {!timerOn && time > 0 && (
                                <button onClick={() => setTimerOn(true)}>Resume</button>
                            )}

                        </td>
                        <td className={classes.buttonCenter}>
                            <img 
                                onClick={props.onShowMenuModal} 
                                src={mainOptions} 
                            />
                        </td>
                    </tr>
                </table>
            </div>
        </header>
    </Fragment>
};

export default PanelTop;