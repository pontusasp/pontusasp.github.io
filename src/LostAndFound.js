import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

function LostAndFound() {
  return (
    <div className="App-page">
      <div>
        <p className="App-bigtext">
          Oops, I lost something?
        </p>
        <p>
          Please let me know the whereabouts of my item(s) so we can figure out a way for them to find their way back to me!
        </p>
        <p>
          The easiest way to get in contact with me is to send me an email to <a href="mailto:pontus.asp@gmail.com">pontus.asp@gmail.com</a> or to call/text me at <a href="tel:+46734005398">+46734005398</a>. If you do send me an email please include "Lost And Found" in the the subject so that I can find the email more easily.
        </p>
        <p>Thank you so much for your help!</p>
      </div>
      <div id="placeholder"></div>
    </div>
  );
}

export default LostAndFound;
