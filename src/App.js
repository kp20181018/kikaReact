import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Kviz from './Kviz';
import Resenja from './Resenja';

function App() {
  return (
    <div className='kontejner'>
      <img className="skocko" src='https://yt3.ggpht.com/_PFUgISL9Is0EymuUaQiddyANjSIv6r15VwOR-i83Tguz-dNRFiOevEaZarH8YtNiCoBO-Ei=s900-c-k-c0x00ffffff-no-rj' />
      <Router>
        <Navbar />
        <Switch>
          <Route path='/kviz'>
            <Kviz />
          </Route>
          <Route path='/resenja'>
            <Resenja />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
