import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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

export default About;
