import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function exchange() {
    const el = document.getElementById('t30');
    const ph = document.getElementById('placeholder');

    const txt = el.value.trim().toLowerCase();
    switch(txt) {
        case 'puuus':
            ph.innerHTML = 'N 59° 21.563 E 018° 05.178'
            break;
        case 'scream aim fire':
            break;
        default:
            if (txt != 'hej') {
                ph.innerHTML = '🤔';
            } else {
                ph.innerHTML = ':D';
            }
    }
}

function T30() {
    return (
        <div className="App-page">
            <div>
                <input id="t30" type="text" />
                <input type="button" onClick={exchange} value="OK" />
            </div>
            <div id="placeholder"></div>
        </div>
    );
}

export default T30;
