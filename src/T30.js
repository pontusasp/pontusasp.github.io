import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

/*
1. Coklad med papper i med en URL på + första koden
    a. På hemsidan finns det endast en tom textruta och en submitknapp
    b. vad man får av förta koden: koordinater (+ kanske en hint under chiffer)
2. Geocache innehåller kod till hemsidan bakom scoutchiffer
3. Hemsidan ger då en prompt där den frågar hur många dagar sedan vi blev tillsammans
    a. Visar en bild på vart första boken ligger som innehåller krypterade meddelandet "Låtnamn kill your enemies my brothers dead"
    b. Ger koordinat som resultat
4. Geocache innehåller krypteringnyckeln till koden till hemsidan igen, denna gång krypterat med mönstrat papper
5. Hemsidan anger att kolla csgo consollen
6. csgo consollen ger en ny kod till hemsidan
7. hemsidan berättar vart sista boken finns
8. I boken ligger det en lapp med en ny kod till hemsidan
    hemsidan säger att en till present är på väg alternativt vart den ligger
*/
function exchange() {
    const el = document.getElementById('t30');
    const ph = document.getElementById('placeholder');

    const txt = el.value.trim().toLowerCase();
    switch(txt) {
        case 'puuus':
            ph.innerHTML = 'N 59° 21.563 E 018° 05.178'
            break;
        case 'scream aim fire':
            ph.innerHTML = '<b>Screaam Aiiim Fiireee</b><i>... och sedan kolla vad som står i CS konsollen</i>'
            break;
        case 'jagälskardig':
        case 'jag älskar dig':
            ph.innerHTML = '💞❤️💕 och jag älskar dig 💕❤️💞 <br />Hur många dagar sedan var det sedan vi vart tillsammans?';
            break;
        case 'peter lemarc':
            ph.innerHTML = 'Hmm vad står bakom Peter LeMarcs rygg?';
            break;
        case 'caprese':
            ph.innerHTML = 'Hmm det finns ingen caprese i kylen, ligger den kanske ovanpå?';
            break;
        case 'färger':
            ph.innerHTML = 'Vad ligger i den beiga påsen?';
            break;
        case 'försenad':
            ph.innerHTML = 'Hmm vad kan det ligga i garderoben?';
            break;
        default:
            const date1 = new Date("01/26/2022");
            const date2 = new Date();
            
            const dt = date2.getTime() - date1.getTime();
            const dd = Math.floor(dt / (1000 * 3600 * 24));
            let heart = '❤️ ';
            let hearts = '';
            for (let i = 0; i < dd; i++)
                hearts += heart;
            hearts = hearts.trim().toLowerCase();

            if (txt == dd || txt == (dd+1)) {
                ph.innerHTML = 'Jaa, och många fler ska det bli!!!<br/>Nästa kod:<br/>' + hearts;
            }
            else if (txt == hearts) {
                ph.innerHTML = '<b>N 59° 21.900 E 018° 05.037</b><br/><br/>Nästa kod: <i>Peter LeMarc</i>';
            } else {
                if (txt != 'hej') {
                    ph.innerHTML = '🤔';
                } else {
                    ph.innerHTML = ':D';
                }
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
