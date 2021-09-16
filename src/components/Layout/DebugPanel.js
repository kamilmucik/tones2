import {Fragment, useContext} from 'react';
import classes from './DebugPanel.module.css';
import AppContext from '../../store/app-context';
import packageJson from '../../../package.json';

const DebugPanel = props => {

    const appCtx = useContext(AppContext);

    const metronomTempoValue = appCtx.metronomTempoValue;
    const microphoneCheckedValue = appCtx.microphoneCheckedValue;
    const playCheckedValue = appCtx.playCheckedValue;
    const chartCheckedValue = appCtx.chartCheckedValue;
    const currentInstrument = appCtx.currentInstrument;
    const currentNote = appCtx.currentNote;
    const micLevel = appCtx.micLevel;
    const currentPlayTime = appCtx.currentPlayTime;

    return <Fragment>
        <div className={classes.location}>
            <table>
            <tbody>
                <tr><td>version</td><td>:</td><td>{packageJson.version}</td></tr>  
                <tr><td>metronom tempo</td><td>:</td><td>{metronomTempoValue}</td></tr>        
                <tr><td>currentInstrument</td><td>:</td><td>{currentInstrument}</td></tr>        
                <tr><td>currentNote</td><td>:</td><td>{currentNote}</td></tr>                
                <tr><td>micLevel</td><td>:</td><td>{micLevel}</td></tr>                
                <tr><td>microphoneChecked</td><td>:</td><td>{microphoneCheckedValue ? 'true' : 'false'}</td></tr>
                <tr><td>playCheckedValue</td><td>:</td><td>{playCheckedValue ? 'true' : 'false'}</td></tr>
                <tr><td>chartCheckedValue</td><td>:</td><td>{chartCheckedValue ? 'true' : 'false'}</td></tr>
                <tr>
                    <td>timmer</td><td>:</td>
                    <td>
                        <span>{("0" + Math.floor((currentPlayTime / 60000) % 60)).slice(-2)}:</span>
                        <span>{("0" + Math.floor((currentPlayTime / 1000) % 60)).slice(-2)}:</span>
                        <span>{("0" + ((currentPlayTime / 10) % 100)).slice(-2)}</span>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </Fragment>
};

export default DebugPanel;