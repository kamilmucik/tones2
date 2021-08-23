import {Fragment, useContext} from 'react';
import ChartPanel from './ChartPanel';
import NotePanel from './NotePanel';
import classes from './PanelMain.module.css';
import AppContext from '../../store/app-context';

const PanelMain = props => {

    const appCtx = useContext(AppContext);
    
    const chartCheckedValue = appCtx.chartCheckedValue;

    return <Fragment>
        <div className={classes.tab}>
            <div className={classes.inlineBlock}>
                {chartCheckedValue && <ChartPanel />}
            </div>
            <div className={classes.inlineBlock}>
                <NotePanel />
            </div>
        </div>
    </Fragment>
};

export default PanelMain;