import Navbar from "../components/Navbar";
import Project from "../components/Project";

const projects = [
    {
        title: "Fluid Simulation",
        description: "I created this fluid simulation project during a course at KTH in Computer Graphics using SFML and C++. You can read more if you go to the project page, and there is also a blog section which contains some blog posts I made during developing the project.",
        image: "/img/fluid-simulation.png",
        link: "https://github.com/pontusasp/fluid-simulation",
        button: "View on GitHub",
    },
    {
        title: "Red Painter Man",
        description: <div className={"flex flex-col gap-4"}><span>The Red Painter is a game made in Unity where you can explore a randomly generated world. Taking your car along the road will lead you to barns ready to be re-painted and have their roofs cleaned. After you finish painting all the barns, or feel finished with exploring each location you can simply relocate from the menu to find a new world to explore!</span><span>I made this game as a tribute to my father who runs a painting company for his 50th birthday.</span></div>,
        image: "/img/red-painter-man-icon.png",
        link: "https://play.google.com/store/apps/details?id=com.pontusasp.TheRedPainter&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1",
        button: "Get it on Google Play",
    },
    {
        title: "Wanderful",
        description: "Wanderful is a game created in Unity by a team of five people which I was a part of. My main responsibilities was creating the project web page and also creating assets for the game.",
        image: "/img/wanderful-icon.png",
        link: "https://wanderfulgame.netlify.app/",
        button: "Link to Page",
    },
    {
        title: "This website",
        description: "This website is built using React and Tailwind CSS. It is hosted on Firebase and serves as both a hobby project and as a portfolio.",
        image: "/pontusasp-logo.min.svg",
        link: "https://github.com/pontusasp/pontusasp.github.io",
        button: "View on GitHub",
    },
    {
        title: "Shadertoy profile",
        description: "Shadertoy is a website where you can create and share shaders. You can see some of my shader creations over at my shadertoy profile! The shader you see above is something I just made when I played around with some math.",
        custom: <iframe className={"max-w-full"} title={"shadertoy"} width="640" height="360" frameborder="0" src="https://www.shadertoy.com/embed/7dfGW8?gui=true&t=10&paused=false&muted=true" allowfullscreen></iframe>,
        link: "https://www.shadertoy.com/user/pontusasp",
        button: "View Shadertoy Profile",
    },
    {
        title: "Nightmar",
        description: "Nightmar is a VR game made in Unity where you play as a character that is trapped in a haunted house, and you must find four keys to escape it. While searching for the keys you must avoid a terrifying creature that will hunt you down if it sees you. Spectators can assist the player by controlling security cameras situated around the house and tell them where the creature is if they spot it. This game was made during a course at KTH with a team of five people. You can read more about the game on the games website, which I was responsible for making.",
        link: "https://agi-nightmar.web.app/",
        image: "/img/nightmar.png",
        button: "Link to Page",
    },
    {
        title: "Blueflower",
        description: "Blueflower is a game made in Python using PyGame that I made during a 42 hour long game jam with the theme of april fools.",
        image: "/img/blueflower-logo.png",
        link: "https://github.com/pontusasp/blueflower",
        button: "View on GitHub",
    },
    {
        title: "Game of Life",
        description: "My version of Game of Life which has cells that change color depending on how many times they have died and lived! It is created in Java overriding the built-in Swing librarys drawing function.",
        image: "/img/game-of-life-screenshot1.png",
        link: "https://github.com/pontusasp/game-of-life",
        button: "View on GitHub",
    },
    {
        title: "TSP Visualizer",
        description: <div className={"flex flex-col gap-4"}><span>This is a visualizer for solutions to the TSP (short for travelling salesperson) problem where we have a set of nodes and need to construct edges between the nodes to form a Hamiltonian cycle while minimizing the total length of the edges.</span><span>The visualizer takes in both the graph and the solution as input. It expects the first line to contain the number of nodes in the graph and in the following N lines it expects the X Y position of each node (space separated, floats allowed). After reading those N lines it expects N more lines, this time being the indices of the nodes in the order of how the nodes should be traversed to form a Hamiltonian path (last index connects to the first one to create a cycle).</span></div>,
        image: "/img/tsp-visualizer/blue-filled.png",
        link: "/apps/tsp-visualizer",
        button: "View on GitHub",
    },
    {
        title: "DustSDL2",
        description: <div className={"flex flex-col gap-4"}><span>DustSDL2 is a version of a simple game I have made many times, initially called Dust. The game is simply a gravity simulation on many small particles having no collision with each other, using additive coloring to make high density areas brighter than others.</span><span>The first time I created this game it was simply because I wanted to create a nice looking effect, I made it in Java and the drawing was done using Swing. It was quite slow so I tried to optimize it by recreating it and simplifying the math etc. I also ported it to Android using the LibGDX library, I also programmed it in C#/Unity, C++/OpenGL and finally the version I am most happy with: C++ using SDL2, this version.</span></div>,
        image: "/img/DustSDL2/dust-blue.png",
        link: "",
        button: "View on GitHub",
    },
    {
        title: "3D Point Renderer",
        description: "This is a very basic version of a 3D renderer that can render points in space. Its usage is quite limited but it can easily be used to draw multivariable mathematical functions. I created this in Java using 2D drawing with Swing.",
        image: "/img/3d-point-renderer.png",
        link: "https://github.com/pontusasp/3d-point-renderer",
        button: "View on GitHub",
    },
    {
        title: "Mandelbrot Java Renderer",
        description: "Mandelbrot renderer written in Java using Swing for graphics. Not very optimized but fast enough to zoom into the mandelbrot set in real time until the double float precision isn't enough to render the set on the screen anymore.",
        image: "/img/mandelbrot-renderer.png",
        link: "https://github.com/pontusasp/mandelbrot-java",
        button: "View on GitHub",
    },
    {
        title: "BallGame",
        description: "A very simple game made for a tutorial I held for other students to showcase how to easily start creating games in Java.",
        image: "/img/ballgame.png",
        link: "https://github.com/pontusasp/BallGame",
        button: "View on GitHub",
    },
    {
        title: "GitHub Profile",
        description: "You can find most of my public projects on my GitHub page!",
        image: "/img/github-profile.jpg",
        link: "https://github.com/pontusasp",
        button: "View GitHub Profile",
    },
];

function Portfolio() {
    return (
        <div className={"flex gap-8 flex-col sm:max-w-2xl m-8"}>
            {projects.map((project) => (
                <Project
                    key={project.title}
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    custom={project.custom}
                    link={project.link}
                    button={project.button}
                />
            ))}
        </div>
    );
}

export default Portfolio;