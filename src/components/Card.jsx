function Card({child}) {
    return <div
      className={
        "flex flex-col p-8 border-2 border-violet-900 rounded-md sm:max-w-xl shadow-2xl shadow-violet-950/50 bg-violet-400/5"
      }
    >
        {child}
    </div>
}

export default Card;