function RedPainterPrivacyPolicy() {
  return (
    <div
      className={
        "p-8 flex flex-col gap-4 border-b-4 border-violet-900 rounded-md sm:max-w-xl shadow-2xl shadow-violet-950/50 bg-violet-400/5"
      }
    >
      <h1 className={"font-bold text-2xl"}>The Red Painter Privacy Policy</h1>
      <span>I do not collect any user data in my game The Red Painter.</span>
      <span>
        However the game is built with Unity and I can not control what data
        they collect.
      </span>
      <span>
        You can find Unity's privacy policy here:{" "}
        <a
          className={"underline text-blue-600"}
          href="https://unity3d.com/legal/privacy-policy"
          target="_blank"
          rel="noreferrer"
        >
          https://unity3d.com/legal/privacy-policy
        </a>
      </span>
    </div>
  );
}

export default RedPainterPrivacyPolicy;
