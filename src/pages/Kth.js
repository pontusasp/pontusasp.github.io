import { Link } from "react-router-dom";

const projects = [
  {
    title: "Fluid Dynamics Simulation",
    course: "DH2323 Computer Graphics and Interaction",
    description: (
      <>
        In this course I got an introduction to ray tracing, rasterizing and
        other techniques used in games, such as portals, bounding volumes for
        collision checking etc. I also made a project where I made a
        navier-stokes fluid dynamics simulation using C++ and SFML. Here is the{" "}
        <a
          className={"underline"}
          href="https://github.com/pontusasp/fluid-simulation"
          target="_blank"
          rel="noreferrer"
        >
          GitHub Page
        </a>{" "}
        and the{" "}
        <a
          className={"underline"}
          href="https://github.com/pontusasp/fluid-simulation/blob/master/blog.md"
          target="_blank"
          rel="noreferrer"
        >
          Development Blog
        </a>
        .
      </>
    ),
  },
  {
    title: "Wanderful",
    course: "DH2650 Computer Game Design",
    description: (
      <>
        In this course I along with a few other students created a game with
        inspiration taken from hotline miami.
        <br />
        Here you can find the{" "}
        <Link className={"underline"} to="/kth/dh2650/blog">
          development blog
        </Link>
        , and the{" "}
        <a
          className={"underline"}
          href="https://wanderfulgame.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          project website
        </a>
        .
      </>
    ),
  },
  {
    title: "Nightmar",
    course: "DH2413 Advanced Graphics and Interaction",
    description: (
      <>
        <div className={"flex flex-col gap-4"}>
          <span>
            In this course I along with a few other students created two games,
            Marball and Nightmar. Marball is a puzzle game using physical items
            and pivoting a table as controls, and Nightmar is a horror game
            played in VR, and optinally viewed by spectators on a screen.
          </span>
          <span>
            Marball was our first game and was developed to be used on a table
            with a build in screen that could recognize certain objects that was
            placed on it. We utilized this in addition to creating a stand where
            you could pivot the table and adding a phone with an accompanying
            app that acted as an accelerometer for the game. The game was
            inspired by the physical game labyrinth but in a more detailed
            virtual world and with tools such as turbines blowing the marble
            around, magnets and size modifying objects. The objects where items
            you would place on top of the table/screen that would affect the
            game world and utilize to get the marble from the start of each
            level to the finish.
            <br />
            You can find the project website{" "}
            <a
              className={"underline"}
              href="https://emma1565.wixsite.com/marball"
              target="_blank"
              rel="noreferrer"
            >
              here
            </a>
            .
          </span>
          <span>
            Nightmar was the second game we created, and this time we developed
            it with VR in mind. But if you are multiple people together then
            everyone can participate, as spectators are given a view into the
            game world through security cameras that they view on a normal
            monitor, and through these security cameras they can warn the player
            of monsters lurking around the corners!
            <br />
            You can check it out{" "}
            <a
              className={"underline"}
              href="https://agi-nightmar.web.app/"
              target="_blank"
              rel="noreferrer"
            >
              here
            </a>
            !
          </span>
        </div>
      </>
    ),
  },
  {
    title: "MovieMap",
    course: "DH2321 Information Visualization",
    description: (
      <>
        During this course I learned how to use{" "}
        <a href="https://d3js.org/" target="_blank" rel="noreferrer">
          D3.js
        </a>{" "}
        (in combination with React) to be able to visualize large amounts of
        data. In the course we learned some theory about visualization but I
        would argue that where I learned the most was during the project, which
        is when we learned to use D3.js. The project was done in teams of 5, we
        made a website that visualizes the economics of different movie titles
        so that you can easily find movies with a lot of revenue, while having a
        low budget etc. You can find the page here:
        <br />
        <a
          className={"underline"}
          href="https://moviemap-vis.web.app/"
          target="_blank"
          rel="noreferrer"
        >
          https://moviemap-vis.web.app/
        </a>
      </>
    ),
  },
];

function CourseProject(props) {
  return (
    <div
      className={
        "rounded-md border-violet-900 sm:border-b-4 sm:max-w-2xl shadow-violet-950/50 bg-gradient-to-br from-violet-950/10 to-violet-900/10 p-4 shadow-lg"
      }
    >
      <div className={"flex flex-col gap-4 p-4"}>
        <span className={"text-2xl font-bold tracking-wide"}>
          {props.title}
        </span>
        <span className={"text-2xl tracking-wide"}>{props.course}</span>
        <span className={"text-xl leading-normal"}>{props.description}</span>
      </div>
    </div>
  );
}

function CourseProjects() {
  return (
    <>
      {projects.map((project) => (
        <CourseProject
          key={project.title}
          title={project.title}
          course={project.course}
          description={project.description}
        />
      ))}
    </>
  );
}

function Kth() {
  return (
    <div className={"flex flex-col gap-8 items-center my-8"}>
      <div
        className={
          "rounded-md border-b-4 border-violet-950 bg-gradient-to-br from-violet-950/20 to-violet-900/20 p-4 shadow-lg"
        }
      >
        <div className={"flex flex-col gap-4 p-4"}>
          <span className={"text-2xl font-bold tracking-wide"}>
            KTH Royal Institute of Technology
          </span>
          <span className={"text-2xl font-bold tracking-wide"}>
            Course Projects
          </span>
          <span className={"text-xl leading-relaxed"}>
            Here are some course projects that I have been working on during my
            time as a student at KTH.
          </span>
        </div>
      </div>
      <CourseProjects />
    </div>
  );
}

export default Kth;
