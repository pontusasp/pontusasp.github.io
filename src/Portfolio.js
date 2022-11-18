import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Portfolio() {
    return (
        <Switch>
            <Route path="/portfolio">
                <PortfolioBase />
            </Route>
        </Switch>
    );
}

function PortfolioBase() {
    const styling = `
    #tsp-vis-portfolio:hover {
        background: url('/img/tsp-visualizer/blue.png');
        background-size: 100%;
    }
    #tsp-vis-portfolio {
        background: url('/img/tsp-visualizer/blue-filled.png');
        background-size: 100%;
    }
    .portfolioHicon {
        width: 20em;
        height: 20em;
        display: inline-block;
    }
    #dust-sdl-2-portfolio {
        width: 32em;
        height: 18em;
        background: url('/img/DustSDL2/dust-blue.png');
        background-size: 100%;
    }
    #dust-sdl-2-portfolio:hover {
        background: url('/img/DustSDL2/dust-green.png');
        background-size: 100%;
    }
    `;

    return (<>
        <div className="App-page" style={{display:'block'}}>
            <p className="App-bigtext">
                Portfolio
            </p>
            <PortfolioItem title={'Red Painter Man'} icon={'red-painter-man-icon.png'} link={'/apps/the-red-painter'}/>
            <PortfolioItem title={'Wanderful'} icon={'logo_1.png'} link={'https://wanderfulgame.netlify.app/'}/>
            <PortfolioItem title={'Shadertoy profile'} hicon={<iframe width="640" height="360" frameborder="0" src="https://www.shadertoy.com/embed/7dfGW8?gui=true&t=10&paused=false&muted=true" allowfullscreen></iframe>} link={'https://www.shadertoy.com/user/pontusasp'}/>
            <PortfolioItem title={'Blueflower'} icon={'blueflower-logo.png'} link={'https://github.com/pontusasp/blueflower'}/>
            <PortfolioItem title={'Game of Life'} icon={'game-of-life-screenshot1.png'} link={'https://github.com/pontusasp/game-of-life'}/>
            <PortfolioItem title={'TSP Visualizer'} hicon={<>
                <div id="tsp-vis-portfolio" className="portfolioHicon"></div>
            </>} link={'https://github.com/pontusasp/tsp-visualizer'}/>
            <PortfolioItem title={'DustSDL2'} hicon={<>
                <div id="dust-sdl-2-portfolio" className="portfolioHicon"></div>
            </>} link={'https://github.com/pontusasp/DustSDL2'}/>
            <PortfolioItem title={'Fluid Simulation'} icon={'fluid-simulation.png'} link={'https://github.com/pontusasp/fluid-simulation'}/>
            <PortfolioItem title={'3D Point Renderer'} icon={'3d-point-renderer.png'} link={'https://github.com/pontusasp/3d-point-renderer'}/>
            <PortfolioItem title={'Mandelbrot Java Renderer'} icon={'mandelbrot-renderer.png'} link={'https://github.com/pontusasp/mandelbrot-java'}/>
            <PortfolioItem title={'BallGame'} icon={'ballgame.png'} link={'https://github.com/pontusasp/BallGame'}/>
            <PortfolioItem title={'GitHub Profile'} icon={'github-profile.jpg'} link={'https://github.com/pontusasp'}/>
        </div>
        <style>{styling}</style>
    </>);
}

function PortfolioItem({title, icon, link, hicon}) {
    let content = <></>;
    let image;
    if (icon)
        image = <><img src={'/img/' + icon} /></>;
    else
        image = hicon;

    if (link.includes(':'))
        content = <a href={link} target="_blank">
                <p>{image}</p>
                <p>{title}</p>
            </a>;
    else content = <Link to={link}>
            <p>{image}</p>
            <p>{title}</p>
        </Link>;

    return (<>
        <div style={{
            border: '1px solid #224',
            padding: '0.5em',
            borderRadius: '1em',
            margin: '1em',
            background: '#ffffff03',
            boxShadow: '5px 5px 3px black'
        }}>{content}</div>
    </>);
}

export default Portfolio;
