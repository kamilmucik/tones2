import {Fragment, useContext} from 'react';
import AppContext from '../../store/app-context';
import getImageByKey from '../common/getImageByKey';

const ChartPanel = props => {

    const appCtx = useContext(AppContext);
    
    const currentInstrument = appCtx.currentInstrument;
    const currentNote = appCtx.currentNote;
    
    return <Fragment>
        <div>
            <img src={getImageByKey(currentInstrument + '_' + currentNote)}></img>
        </div>
    </Fragment>
};

export default ChartPanel;