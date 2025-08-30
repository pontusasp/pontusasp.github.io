import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions(),
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

function GameComponent({setPlayGame}) {
  const { height, width } = useWindowDimensions();
  const scaleX = width / 800;
  const scaleY = height / 800;
  const scale = Math.min(scaleX, scaleY);

  return (
    <div className="App-page">
      <div className={"flex gap-2"} style={{ transform: `scale(${scale})` }}>
        <iframe
          title="t32-64"
          id="t32-64-iframe"
          src={process.env.PUBLIC_URL + "/games/t32-64/index.html"}
          width="800"
          height="800"
          scrolling="no"
          style={{
            border: "none",
            overflow: "hidden",
            flexGrow: "1",
          }}
        ></iframe>
      </div>
    </div>
  );
}

/*
 * Tove 32
 * 
 * 1. Presentkort med en NFC tag som leder till startsidan.
 * 2. Starta skattjakten.
 * 3. Mer
 * 
 * Pikachu                    Fjäril    4     NMVHST  2
 * Pikachu med ballonger      Ballong   5     MHYTSJ  6
 * Choklad (mint)             Fjäril    6     OPYUIO  1
 * Choklad (vit)              Ballong   7     HNBNNY  3
 * Chokladhjärta              Fjäril    3     LMLMUI  5
 * Ultra Pro                  Fjäril    1     JMNSYQ  4
 * Pärm                       Ballong   2     YGHEQM  7
 * 
 * 1. Choklad fjäril + kort > i nattduksbordet
 * 2. Pikachu fjäril > Bakom pikachuburkarna
 * 3. Choklad ballong > Vid tekannan
 * 4. Ultra Pro > Bakom magic-påsen vid bokhyllan
 * 5. Choklad Hjärta > Under sängen
 * 6. Pikachu ballong > Uppe på lilla hyllan
 * 7. Pärm > Bakom soffan
 * 
 * Kort:
 * Grattis på 32-årsdagen älskling!
 * 
 * Du är det finaste jag har, jag älskar dig <3
 * NFC hit
 */

function T32Component({
  setPlayGame = (bool) => {},
}) {
  const [puzzleState, setPuzzleState] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [wrongAnswer, setWrongAnswer] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const puzzle = [
    {
      text: <div className="flex flex-col gap-2">
        <span className="text-xl font-bold">Starta skattjakten!</span>
      </div>,
      success: "<3 <3 <3",
    },
    {
      // Choklad (mint) OPYUIO
      text: <span>Hmmm...</span>,
      answer: "OPYUIO",
    },
    {
      // Pikachu NMVHST
      text: "Jag har fått lite hjälp av två gulliga gula vänner <3",
      answer: "NMVHST",
      success: "⚡️⚡️⚡️",
    },
    {
      // Choklad (vit) HNBNNY
      text: "Nu när vi har så många små pikachus kanske vi ska fira med en fest lik den i Alice i underlandet!",
      answer: "HNBNNY",
      success: "Gobble gobble 🫖 🍫",
    },
    {
      // Chokladhjärta LMLMUI
      text: "Nästa ledtråd har tagit lite inspiration från Mingus med vart man kan gömma sig <3",
      answer: "LMLMUI",
    },
    {
      // Ultra Pro JMNSYQ
      text: "Om man sitter och fikar utomhus kan det vara bra att leta här om det blir lite kyligt...",
      //text: "När man fikar kan det ju vara kul att spela lite spel, vissa är lite populärare än andra, särskilt inom ITK.",
      answer: "JMNSYQ",
    },
    {
      text: <Link className="underline" to="/tove/32/game" target="_blank" rel="noopener noreferrer">Nu vill pikachu leka!</Link>,
      answer: "KLGTDS",
    },
    {
      // Pärm YGHEQM
      text: "Du kanske satt i soffan när du klarade dig ända hit..? 😎",
      answer: "YGHEQM",
    },
    {
      // Pikachu med ballonger MHYTSJ
      text: "Oj! Det finns rykten om att pikachusarna har hittat ännu fler skatter!",
      answer: "MHYTSJ",
    },
    {
      text: "Grattis igen älskling <3",
      success: "Du klarade dig till slutet ❤️",
    },
    {
      text: "Här kommer spelet igen bara för skojs skull <3",
    }
  ];
  const lastPuzzleState = puzzle.length - 1;
  
  const correctAnswer = (answer) => {
  if (puzzle[puzzleState].answer === undefined) return true;
    return answer.toLowerCase() === puzzle[puzzleState].answer.toLowerCase();
  };
  
  const nextStep = () => {
    if (puzzleState === lastPuzzleState || puzzle[puzzleState].playGame) {
      setPlayGame(true);
    } else {
      if (!showSuccess && puzzle[puzzleState].success) {
        setShowSuccess(true);
      } else {
        setInputValue("");
        setShowSuccess(false);
        setPuzzleState(puzzleState + 1);
      }
    }
  };
  
  const submitAnswer = () => {
    if (correctAnswer(inputValue)) {
      nextStep();
    } else {
      setWrongAnswer(true);
    }
  };
  
  const currentPuzzle = <>
    { puzzle[puzzleState]?.text ? <span>{puzzle[puzzleState]?.text}</span> : undefined }
    { puzzle[puzzleState]?.answer ? <input
      className={"text-black"} id="t32" type="text"
      value={inputValue}
      onChange={e => setInputValue(e.target.value)}
    /> : undefined }
  </>;

  return (
    <div className="App-page">
      <form
        className={"flex flex-col gap-2 mx-8 transition-all " + (wrongAnswer ? "error-shake" : "")}
        style={ wrongAnswer ? { color: "red" } : {} }
        onSubmit={e => {
          e.preventDefault();
          submitAnswer();
        }}
        onAnimationEnd={() => setWrongAnswer(false)}
      >
        { showSuccess ? puzzle[puzzleState].success : currentPuzzle }
        <input
          className={"bg-gray-300 border-1 text-black rounded border-black"}
          type="submit"
          value="OK"
       />
      </form>
    </div>
  );
}

function T32({playGame}) {
  const [playGameState, setPlayGame] = useState(playGame);
  const [transitionToGame, setTransitionToGame] = useState(playGame);
  
  useEffect(() => {
    if (transitionToGame) {
      setTimeout(() => {
        setPlayGame(true);
      }, 1000);
    }
  }, [transitionToGame]);

  return (
    <div
      className={"app-container flex flex-col min-h-screen bg-gradient-to-br from-black to-violet-950"}
    >
      <main
        className={
          "flex-grow flex items-center justify-center text-violet-50 overflow-hidden transition-colors duration-1000" +
          (transitionToGame ? " bg-black" : "bg-transparent")
        }
      >
      { transitionToGame ? (playGameState ? <GameComponent setPlayGame={setTransitionToGame} /> : undefined) : <T32Component setPlayGame={setTransitionToGame} /> }
      </main>
    </div>
  );
}

export default T32;
