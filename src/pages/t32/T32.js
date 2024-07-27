function T32Component() {
  return (
    <div className="App-page">
      <div className={"flex flex-col gap-2"}>
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
        "app-container flex flex-col min-h-screen bg-gradient-to-br from-black to-slate-950"
      }
    >
      <main
        className={"flex-grow flex items-center justify-center text-violet-50"}
      >
        <T32Component />
      </main>
    </div>
  );
}

export default T32;
