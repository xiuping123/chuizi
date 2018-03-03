import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import Fenlei from './components/Fenlei';
import Shop from './components/Shop';
import Mine from './components/Mine';
import Detail from './components/Detail';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route path="/fenlei" component={Fenlei} />
          <Route path="/shop" component={Shop} />
          <Route path="/mine" component={Mine} />
          <Route path="/detail/:fid" component={Detail} />
        </div>
      </Router>
    );
  }
}

export default App;
