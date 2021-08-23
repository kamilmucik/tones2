import { useContext} from 'react';
import Modal from '../common/Modal.component';
import AppContext from '../../store/app-context';

const Metronom = props => {
    const appCtx = useContext(AppContext);

    const incHandler = event => {
        event.preventDefault();
        appCtx.incMetronomTempo(5);
    };
    const decHandler = event => {
        event.preventDefault();
        appCtx.decMetronomTempo(5);
    };

    const metronomTempoValue = appCtx.metronomTempoValue;
    
    return <Modal onClose={props.onHideModal}> 
        <button onClick={props.onHideModal}>zamknij</button>
        <div>
            <button onClick={decHandler}>-</button>
            <p>{metronomTempoValue}</p>
            <button onClick={incHandler}>+</button>
        </div>
    </Modal>;
};

export default Metronom;