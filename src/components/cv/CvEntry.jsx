import CvBody from "./CvBody";
import CvSkills from "./CvSkills";
import EditableField from "./EditableField";
import { useCvEdit } from "./CvEditContext";

function CvEntry({ id, title, titleAlign, date, skills, stretchSkills, body, links }) {
    const { editing, data, update } = useCvEdit();
    const entryIdx = data.entries.findIndex(e => e.id === id);
    const path = `entries[${entryIdx}]`;

    const titleContent = editing
        ? <EditableField value={title} onChange={v => update(`${path}.title`, v)} />
        : titleAlign === "bottom"
            ? <div className="align-bottom">{title}</div>
            : <span>{title}</span>;

    const dateContent = editing
        ? Array.isArray(date)
            ? <span>
                {date.map((d, i) => (
                    <div key={i} className={i === 0 ? "text-right" : ""}>
                        <EditableField
                            value={d}
                            onChange={v => {
                                const newDate = [...date];
                                newDate[i] = v;
                                update(`${path}.date`, newDate);
                            }}
                        />
                    </div>
                ))}
            </span>
            : <EditableField
                value={date || ""}
                onChange={v => update(`${path}.date`, v)}
                className="text-right"
            />
        : Array.isArray(date)
            ? <span>{date.map((d, i) => <div key={i} className={i === 0 ? "text-right" : ""}>{d}</div>)}</span>
            : <span>{date}</span>;

    const skillsContent = editing
        ? <CvSkills skills={skills} stretchSkills={stretchSkills} entryPath={path} />
        : <CvSkills skills={skills} stretchSkills={stretchSkills} />;

    const bodyContent = editing
        ? <EditableField
            value={body || ""}
            onChange={v => update(`${path}.body`, v)}
            multiline
        />
        : <CvBody text={body} />;

    return (
        <div className="flex flex-col gap-3">
            <div>
                <div className="flex justify-between gap-4 border-b border-gray-400 pb-1">
                    {titleContent}
                    {dateContent}
                </div>
            </div>
            {skillsContent}
            <span>{bodyContent}</span>
            {links && links.map((link, i) => <span key={i}>{link}</span>)}
        </div>
    );
}

export default CvEntry;
