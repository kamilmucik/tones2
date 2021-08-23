import {Link} from 'react-router-dom';

import classes from './MainFooter.module.css';

const MainFooter = () => {
    return <footer class="footer">
    <div class="container">
      <Link to="/app">App</Link>&nbsp;
      <Link to="/instrumenty">Instrumenty</Link>&nbsp;
      <Link to="/piosenki">Piosenki</Link>
    </div>
  </footer>;
};

export default MainFooter;