import { TheRedPainter } from "./apps/the-red-painter/RedPainterApp";
import { ClockIt } from "./apps/clockit/ClockIt";

function Apps() {
  return <div className="flex">
    <Card app={<TheRedPainter />} />
    <Card app={<ClockIt />} />
  </div>;
}

function Card({app}) {
  return <div
    className={
      "flex flex-col items-center gap-8 sm:max-w-md m-8 p-8 border-2 border-violet-900 rounded-md sm:max-w-xl shadow-2xl shadow-violet-950/50 bg-violet-400/5"
    }
  >{app}</div>;
}

export default Apps;
