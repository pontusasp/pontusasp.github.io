import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className={"flex flex-col gap-4 items-center sm:m-8"}>
      <div>
        <img
          width={323}
          height={323}
          alt="Pontus"
          className={"rounded-full shadow-lg shadow-violet-950/20"}
          src={"/img/pontusasp.jpg"}
        />
      </div>
      <div
        className={
          "rounded-md border-violet-900 sm:border-2 sm:max-w-2xl shadow-violet-950/50 bg-gradient-to-br from-violet-950/10 to-violet-900/10 p-4 shadow-lg"
        }
      >
        <div className={"flex flex-col gap-4 p-4"}>
          <span className={"text-4xl tracking-wide"}>
            <span className={"font-bold"}> Hello! </span>
            <span> My name is </span>
            <span className={"font-bold"}> Pontus Asp</span>
            <span>,</span>
          </span>
          <span className={"text-xl leading-relaxed"}>
            I am currently employed as a software developer at{" "}
            <a
              className={"font-bold"}
              href={"https://skry.se/"}
              target={"_blank"}
              rel="noreferrer"
            >
              Skry
            </a>
            .
          </span>
          <span className={"text-xl leading-relaxed"}>
            My passion for technology spans a variety of fields, from the
            intricacies of web development and systems programming to the
            creative challenges of game development.
          </span>
          <span className={"text-xl leading-relaxed"}>
            If you want to check out some of the things I have been working on
            you can find them at my{" "}
            <Link className={"font-bold"} to="/portfolio">
              Portfolio page
            </Link>
            !
          </span>
        </div>
      </div>
      <div className={"m-4 grid grid-cols-2 justify-center"}>
        <a
          href="https://github.com/pontusasp"
          target={"_blank"}
          rel="noreferrer"
        >
          <div className={"flex items-center justify-center"}>
            <img
              className={"h-10"}
              src="img/GitHub-Mark-Light-64px.png"
              alt={"GitHub Logo"}
            />
            &nbsp;<span>GitHub</span>
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/pontusasp/"
          target={"_blank"}
          rel="noreferrer"
        >
          <div className={"flex items-center justify-center"}>
            <img
              className={"h-10"}
              src="img/LI-Logo.png"
              alt={"LinkedIn Logo"}
            />
          </div>
        </a>
      </div>
    </div>
  );
}
