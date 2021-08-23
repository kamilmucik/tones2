import {NavLink} from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { LinkContainer } from 'react-router-bootstrap';
import classes from './MainHeader.module.css';

const MainHeader = () => {
    return <header>
           <ButtonToolbar className="custom-btn-toolbar">
            <LinkContainer to="/">
              <Button>Home</Button>
            </LinkContainer>
            <LinkContainer to="/instrumenty">
              <Button>Instrumenty</Button>
            </LinkContainer>
            <LinkContainer to="/piosenki">
              <Button>Piosenki</Button>
            </LinkContainer>
          </ButtonToolbar>
    </header>;
};

export default MainHeader;