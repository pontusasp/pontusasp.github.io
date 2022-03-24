import './App.css';
import logo from './pontusasp-logo.svg';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Apps from './Apps';
import Kth from './Kth';
import Links from './Links';
import About from './About';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div className="App-content">
            <Switch>
              <Route path="/apps">
                <Apps />
              </Route>
              <Route path="/kth">
                <Kth />
              </Route>
              <Route path="/links">
                <Links />
              </Route>
              <Route path="/">
                <About />
              </Route>
            </Switch>
          </div>
          <footer className="App-footer">
            <div className="App-menu">
            <Link to="/"><img src={logo} className="App-logo" alt="App-logo" /></Link>
              <div><Link to="/apps">Apps</Link></div>
              <div><Link to="/kth">KTH</Link></div>
              <div><Link to="/links">Links</Link></div>
            </div>
          </footer>
        </Router>
      </div>
    );
  }
}

export default App;
