import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Apps() {
    return (
        <Switch>
            <Route path="/apps/the-red-painter">
                <TheRedPainter />
            </Route>
            <Route path="/apps">
                <div id="Apps" className="App-page">
                    <Link to="/apps/the-red-painter">
                        <p>
                            <img alt="The Red Painter logo" src="/img/red-painter-man-icon.png"/>
                        </p>
                        <p>
                            The Red Painter
                        </p>
                    </Link>
                </div>
            </Route>
        </Switch>
    );
}

function TheRedPainter() {
    return (
        <div className="App-page">
            <p className="App-bigtext">
                <Switch>
                    <Route path="/apps/the-red-painter/privacy-policy">The Red Painter Privacy Policy</Route>
                    <Route path="/apps/the-red-painter">The Red Painter</Route>
                </Switch>
            </p>
            <Switch>
                <Route path="/apps/the-red-painter/privacy-policy">
                    <p className="App-slim">
                        I do not collect any user data in my game The Red Painter.<br/><br/>
                        However the game is built with Unity and I can not control what data they collect.<br/>
                        You can find Unity's privacy policy
                        here: <a href="https://unity3d.com/legal/privacy-policy" target="_blank">https://unity3d.com/legal/privacy-policy</a>
                    </p>
                </Route>
                <Route path="/apps/the-red-painter">
                    <p>
                        <img alt="The Red Painter logo" style={{width: '80%'}} src="/img/red-painter-man-icon.png"/>
                    </p>
                    <p>
                        <a href='https://play.google.com/store/apps/details?id=com.pontusasp.TheRedPainter&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img style={{width: '40%'}} alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'/></a>
                    </p>
                    <p className="App-slim text-i">
                        <Link to="/apps/the-red-painter/privacy-policy">Privacy Policy</Link>
                    </p>
                </Route>
            </Switch>
        </div>
    );
}

export default Apps;
