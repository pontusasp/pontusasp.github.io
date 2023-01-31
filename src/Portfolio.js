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
    .project-link:hover {
        text-decoration: none;
    }
    .project-paper {
        border: 1px solid #224;
        padding: 0.5em 1em;
        border-radius: 1em;
        margin: 2em 1em;
        background: #ffffff03;
        background: #151821FF;
        box-shadow: 0px 5px 10px 2px #0009;
        translate: 0 0.15em;
        transition: box-shadow 250ms ease-in-out, background 250ms ease-in-out, translate 250ms ease-in-out;
    }
    .project-paper:hover {
        background: #15182188;
        box-shadow: 0px 10px 20px 2px #0006;
        translate: 0 0em;
    }
    `;

    return (<>
        <div className="App-page" style={{display:'block'}}>
            <p className="App-bigtext">
                Portfolio
            </p>
            <PortfolioItem title={'Red Painter Man'} icon={'red-painter-man-icon.png'} link={'/apps/the-red-painter'} description={<><p>The Red Painter is a game made in Unity where you can explore a randomly generated world. Taking your car along the road will lead you to barns ready to be re-painted and have their roofs cleaned. After you finish painting all the barns, or feel finished with exploring each location you can simply relocate from the menu to find a new world to explore!</p><p>I made this game as a tribute to my father who runs a painting company for his 50th birthday.</p></>}/>
            <PortfolioItem title={'Wanderful'} icon={'logo_1.png'} link={'https://wanderfulgame.netlify.app/'} description={<p>Wanderful is a game created in Unity by a team of five people which I was a part of. My main responsibilities was creating the project web page and also creating assets for the game.</p>}/>
            <PortfolioItem title={'Shadertoy profile'} hicon={<iframe width="640" height="360" frameborder="0" src="https://www.shadertoy.com/embed/7dfGW8?gui=true&t=10&paused=false&muted=true" allowfullscreen></iframe>} link={'https://www.shadertoy.com/user/pontusasp'} description={<p>You can see some of my shader creations over at my shadertoy profile! The shader you see above is something I just made to play around with some colors and math.</p>}/>
            <PortfolioItem title={'Blueflower'} icon={'blueflower-logo.png'} link={'https://github.com/pontusasp/blueflower'} description={<><p>Blueflower is a game made in Python using PyGame that I made during a 42 hour long game jam with the theme of april fools.</p></>}/>
            <PortfolioItem title={'Game of Life'} icon={'game-of-life-screenshot1.png'} link={'https://github.com/pontusasp/game-of-life'} description={<p>My version of Game of Life which has cells that change color depending on how many times they have died and lived! It is created in Java overriding the built-in Swing librarys drawing function.</p>}/>
            <PortfolioItem title={'TSP Visualizer'} hicon={<>
                <div id="tsp-vis-portfolio" className="portfolioHicon"></div>
            </>} link={'https://github.com/pontusasp/tsp-visualizer'} description={<><p>This is a visualizer for solutions to the TSP (short for travelling salesperson) problem where we have a set of nodes and need to construct edges between the nodes to form a Hamiltonian cycle while minimizing the total length of the edges.</p><p>The visualizer takes in both the graph and the solution as input. It expects the first line to contain the number of nodes in the graph and in the following N lines it expects the X Y position of each node (space separated, floats allowed). After reading those N lines it expects N more lines, this time being the indices of the nodes in the order of how the nodes should be traversed to form a Hamiltonian path (last index connects to the first one to create a cycle).</p></>}/>
            <PortfolioItem title={'DustSDL2'} hicon={<>
                <div id="dust-sdl-2-portfolio" className="portfolioHicon"></div>
            </>} link={'https://github.com/pontusasp/DustSDL2'} description={<><p>DustSDL2 is a version of a simple game I have made many times, initially called Dust. The game is simply a gravity simulation on many small particles having no collision with each other, using additive coloring to make high density areas brighter than others.</p><p>The first time I created this game it was simply because I wanted to create a nice looking effect, I made it in Java and the drawing was done using Swing. It was quite slow so I tried to optimize it by recreating it and simplifying the math etc. I also ported it to Android using the LibGDX library, I also programmed it in C#/Unity, C++/OpenGL and finally the version I am most happy with: C++ using SDL2, this version.</p></>}/>
            <PortfolioItem title={'Fluid Simulation'} icon={'fluid-simulation.png'} link={'https://github.com/pontusasp/fluid-simulation'} description={<><p>I created this fluid simulation project during a course at KTH in Computer Graphics using SFML and C++. You can read more if you go to the project page, and there is also a blog section which contains some blog posts I made during developing the project.</p></>}/>
            <PortfolioItem title={'3D Point Renderer'} icon={'3d-point-renderer.png'} link={'https://github.com/pontusasp/3d-point-renderer'} description={<><p>This is a very basic version of a 3D renderer that can render points in space. Its usage is quite limited but it can easily be used to draw multivariable mathematical functions. I created this in Java using 2D drawing with Swing.</p></>}/>
            <PortfolioItem title={'Mandelbrot Java Renderer'} icon={'mandelbrot-renderer.png'} link={'https://github.com/pontusasp/mandelbrot-java'} description={<p>Mandelbrot renderer written in Java using Swing for graphics. Not very optimized but fast enough to zoom into the mandelbrot set in real time until the double float precision isn't enough to render the set on the screen anymore.</p>}/>
            <PortfolioItem title={'BallGame'} icon={'ballgame.png'} link={'https://github.com/pontusasp/BallGame'} description={<p>A very simple game made for a tutorial I held for other students to showcase how to easily start creating games in Java.</p>}/>
            <PortfolioItem title={'GitHub Profile'} icon={'github-profile.jpg'} link={'https://github.com/pontusasp'} description={<h3>You can also find most of my public projects on my GitHub profile!</h3>}/>
        </div>
        <style>{styling}</style>
    </>);
}

function PortfolioItem({title, icon, link, hicon, description}) {
    let content = <></>;
    let image;
    if (icon)
        image = <><img src={'/img/' + icon} /></>;
    else
        image = hicon;

    if (link.includes(':'))
        content = <a href={link} target="_blank" className="project-link">
                <p>{image}</p>
                <h2>{title}</h2>
            </a>;
    else content = <Link to={link} className={'project-link'}>
            <p>{image}</p>
            <h2>{title}</h2>
        </Link>;

    const desc = description? <>{description}</> : <></>;

    return (<>
        <div className="project-paper">{content}{desc}</div>
    </>);
}

export default Portfolio;
