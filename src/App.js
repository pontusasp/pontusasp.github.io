import './App.css';
import logo from './pontusasp-logo.svg';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
              <Route path="/Apps/the-red-painter/privacy-policy">
                <TheRedPainterPP />
              </Route>
              <Route path="/Apps/the-red-painter">
                <TheRedPainter />
              </Route>
              <Route path="/Apps">
                <Apps />
              </Route>
              <Route path="/Links">
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
              <div><Link to="/Apps">Apps</Link></div>
              <div><Link to="/Links">Links</Link></div>
            </div>
          </footer>
        </Router>
      </div>
    );
  }
}

function About() {
  return (
    <div id="About" className="App-page">
      <p className="App-bigtext">
        Hello! My name is <span className="My-name">Pontus Asp</span>.
      </p>
      <p className="App-slim text-i">
        I am a student at the <span className="My-programme">Information and Communication Technology</span> programme
        at <span className="My-school">KTH Royal Institute of Technology</span> in Stockholm, Sweden.
      </p>
      <div>
        
      </div>
    </div>
  );
}

function Apps() {
  return (
    <div id="Apps" className="App-page">
      <p>
      <Link to="/Apps/the-red-painter">The Red Painter</Link>
      </p>
    </div>
  );
}

function Links() {
  return (
    <div id="Links" className="App-page">
      <p>
        Test
      </p>
    </div>
  );
}

function TheRedPainter() {
  return (
    <div className="App-page">
      <p className="App-bigtext">
        The Red Painter
      </p>
      <p className="App-slim text-i">
        <Link to="/Apps/the-red-painter/privacy-policy">Privacy Policy</Link>
      </p>
    </div>
  );
}

function TheRedPainterPP() {
  return (
    <div className="App-page">
      <p className="App-bigtext">
        The Red Painter Privacy Policy
      </p>
      <p className="App-slim">
        I do not collect any user data in my game The Red Painter.<br/><br/>
        However the game is built with Unity and I can not control what data they collect.<br/>
        You can find Unity's privacy policy
        here: <a href="https://unity3d.com/legal/privacy-policy" target="_blank">https://unity3d.com/legal/privacy-policy</a>
      </p>
    </div>
  );
}

export default App;
