import {Link} from 'react-router-dom';

const MainFooter = () => {
    return <footer className="footer">
    <div className="container">
      <Link to="/app">App</Link>&nbsp;
      <Link to="/instrumenty">Instrumenty</Link>&nbsp;
      <Link to="/piosenki">Piosenki</Link>
    </div>
  </footer>;
};

export default MainFooter;