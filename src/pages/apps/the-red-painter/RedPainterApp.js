import { Link } from "react-router-dom";

export function TheRedPainter() {
  return (<>
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
    </>
  );
}
