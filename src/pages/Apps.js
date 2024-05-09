import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Apps() {
  return <TheRedPainter />;
}

function TheRedPainter() {
  return (
    <div
      className={
        "flex flex-col items-center gap-8 sm:max-w-md m-8 p-8 border-2 border-violet-900 rounded-md sm:max-w-xl shadow-2xl shadow-violet-950/50 bg-violet-400/5"
      }
    >
      <span className={"text-2xl font-bold tracking-wide"}>
        The Red Painter
      </span>
      <img src="/img/red-painter-man-icon.png" alt="The Red Painter" />
      <span className={"w-2/3"}>
        <a
          href="https://play.google.com/store/apps/details?id=com.pontusasp.TheRedPainter&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
          target={"_blank"}
          rel="noreferrer"
        >
          <img
            alt="Get it on Google Play"
            src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
          />
        </a>
      </span>
      <span>
        <Link
          className={"text-blue-600 underline"}
          to="/apps/the-red-painter/privacy-policy"
        >
          Privacy Policy
        </Link>
      </span>
    </div>
  );
}

export default Apps;
