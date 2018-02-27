import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import Fenlei from './components/Fenlei';
import Shop from './components/Shop';
import Mine from './components/Mine';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route path="/fenlei" component={Fenlei} />
          <Route path="/shop" component={Shop} />
          <Route path="/mine" component={Mine} />
        </div>
      </Router>
    );
  }
}

export default App;
