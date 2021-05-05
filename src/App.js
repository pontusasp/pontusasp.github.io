import './App.css';
import React from 'react';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <div className="App-content">
          <div className="App-page">
            <p className="App-bigtext">
              Hello! My name is <span className="My-name">Pontus Asp</span>.
            </p>
            <p className="App-slim text-i">
              I am a student in the <span className="My-programme">Information and Communication Technology</span> programme
              at <span className="My-school">KTH Royal Institute of Technology</span> in Stockholm.
            </p>
            <div>
              
            </div>
          </div>
          <div className="App-page">
            <p>
              Test
            </p>
          </div>
        </div>
        <header className="App-footer">
          <div className="App-logo">P/A</div>
        </header>
      </div>
    );
  }
}

export default App;
