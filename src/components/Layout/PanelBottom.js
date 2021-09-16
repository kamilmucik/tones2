import {Fragment, useContext } from 'react';
import classes from './PanelBottom.module.css';
import mainMicrophone from '../../assets/main_microphone.png';
import mainTime from '../../assets/main_time.png';
import Toggle from '../common/Toggle.component';
import AppContext from '../../store/app-context';

const PanelBottom = props => {


    const appCtx = useContext(AppContext);
    
    const checkMicrophoneIsCheckedHandler = () => {
        appCtx.setMicrophoneChecked(true);
    };

    const uncheckMicrophoneIsCheckedHandler = () => {
        appCtx.setMicrophoneChecked(false);
    };


    return <Fragment>
        <header className={classes.header}>
            <div>
                <table className={classes.buttonWrapper}>
                <tbody>
                    <tr>
                        <td className={classes.buttonCenter}>
                            <a onClick={props.onShowModal}><img src={mainTime} /></a>
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