import { useContext} from 'react';
import Modal from '../common/Modal.component';
import AppContext from '../../store/app-context';

const ModalMenu = props => {
    const appCtx = useContext(AppContext);

    const setFlute = event => {
        event.preventDefault();
        appCtx.setCurrentInstrument('flute');
    };
    const setSax = event => {
        event.preventDefault();
        appCtx.setCurrentInstrument('sax');
    };
    const setVenova = event => {
        event.preventDefault();
        appCtx.setCurrentInstrument('venova');
    };
    
    return <Modal onClose={props.onHideModal}> 
        <button onClick={props.onHideModal}>zamknij</button>
        <div>
            <p>modal menu</p>
            <ul>
                <li>
                    <a onClick={setSax}>sax</a>
                </li>
                <li>
                    <a onClick={setVenova} >venova</a>
                </li>
                <li>
                    <a onClick={setFlute} >flute</a>
                </li>
            </ul>
        </div>
    </Modal>;
};

export default ModalMenu;