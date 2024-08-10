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

function T32Component() {
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

function T32() {
  return (
    <div
      className={
        "app-container flex flex-col min-h-screen bg-black"
      }
    >
      <main
        className={
          "flex-grow flex items-center justify-center text-violet-50 overflow-hidden"
        }
      >
        <T32Component />
      </main>
    </div>
  );
}

export default T32;
