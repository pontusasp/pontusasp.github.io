import CvBody from "./CvBody";
import CvSkills from "./CvSkills";

function CvEntry({ title, titleAlign, date, skills, stretchSkills, body, links }) {
    const titleEl = titleAlign === "bottom"
        ? <div className="align-bottom">{title}</div>
        : <span>{title}</span>;

    const dateEl = Array.isArray(date)
        ? <span>{date.map((d, i) => <div key={i} className={i === 0 ? "text-right" : ""}>{d}</div>)}</span>
        : <span>{date}</span>;

    return (
        <div className="flex flex-col gap-3">
            <div>
                <div className="flex justify-between gap-4 border-b border-gray-400 pb-1">
                    {titleEl}
                    {dateEl}
                </div>
            </div>
            <CvSkills skills={skills} stretchSkills={stretchSkills} />
            <span><CvBody text={body} /></span>
            {links && links.map((link, i) => <span key={i}>{link}</span>)}
        </div>
    );
}

export default CvEntry;
