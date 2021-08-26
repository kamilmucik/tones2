import {Route, Redirect} from 'react-router-dom';
import { useState } from 'react';
import Piosenki from './pages/Piosenki';
import Instrumenty from './pages/Instrumenty';
import MainFooter from './components/MainFooter';
import PanelTop from './components/Layout/PanelTop';
import PanelMain from './components/Layout/PanelMain';
import PanelBottom from './components/Layout/PanelBottom';
import Metronom from './components/Layout/Metronom';
import ModalMenu from './components/Layout/ModalMenu'
import DebugPanel from './components/Layout/DebugPanel';
import AppProvider from './store/AppProvider';
import './App.css'

function App() {
  const [modalIsShown, setModalIsShown] = useState(false);
  const [modalMenuIsShown, setModalMenuIsShown] = useState(false);

  const showModalHandler = () => {
    setModalIsShown(true);
  };
  const hideModalHandler = () => {
    setModalIsShown(false);
  };

  const showModalMenuHandler = () => {
    setModalMenuIsShown(true);
  };
  const hideModalMenuHandler = () => {
    setModalMenuIsShown(false);
  };
  
  return (

    <AppProvider>
      <Redirect to="/app" />

          <Route path="/app" >
              <PanelTop onShowMenuModal={showModalMenuHandler}  />

              <PanelMain />
            
              <PanelBottom 
                onShowModal={showModalHandler} 
              />
          </Route>
          <Route path="/instrumenty" >
            <Instrumenty />
          </Route>
          <Route path="/piosenki" >
            <Piosenki />
          </Route>
        
          <MainFooter />
              
          {modalIsShown && <Metronom onHideModal={hideModalHandler} />}

          {modalMenuIsShown && <ModalMenu onHideModal={hideModalMenuHandler} />}

          <DebugPanel />

      </AppProvider>
  );
}

export default App;
