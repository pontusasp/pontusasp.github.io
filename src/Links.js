import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Links() {
    return (
        <div id="Links" className="App-page">
            <p>
                <a href="https://github.com/pontusasp" style={{
                    display: 'flex',
                    justifyContent: 'center',
                    textDecoration: 'none',
                    color: '#fff'
                }}><span style={{paddingRight:'0.5em'}}>- Check out my </span><img src="img/GitHub-Mark-Light-64px.png" style={{height:'1.5em'}}/>&nbsp;<span>GitHub</span></a>
            </p>
            <p>
                <a href="https://www.linkedin.com/in/pontus-asp-a98a82157/" style={{
                    display: 'flex',
                    justifyContent: 'center',
                    textDecoration: 'none',
                    color: '#fff'
                }}><span style={{paddingRight:'0.5em'}}>- Check out my </span><img src="img/LI-Logo.png" style={{height:'1.25em'}}/></a>
            </p>
        </div>
    );
}

export default Links;
