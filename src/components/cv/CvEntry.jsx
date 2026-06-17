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
            ? <div className="flex flex-col gap-1">
                {date.map((d, i) => (
                    <input
                        key={i}
                        type="text"
                        value={d}
                        onChange={e => {
                            const newDate = [...date];
                            newDate[i] = e.target.value;
                            update(`${path}.date`, newDate);
                        }}
                        className="border border-blue-300 rounded px-1 text-right w-full"
                    />
                ))}
                <button onClick={() => update(`${path}.date`, [...date, ""])} className="text-xs text-blue-600">+ date line</button>
            </div>
            : <input
                type="text"
                value={date || ""}
                onChange={e => update(`${path}.date`, e.target.value)}
                className="border border-blue-300 rounded px-1 text-right"
            />
        : Array.isArray(date)
            ? <span>{date.map((d, i) => <div key={i} className={i === 0 ? "text-right" : ""}>{d}</div>)}</span>
            : <span>{date}</span>;

    const skillsContent = editing
        ? <input
            type="text"
            value={(skills || []).join(", ")}
            onChange={e => update(`${path}.skills`, e.target.value.split(",").map(s => s.trim()).filter(Boolean))}
            placeholder="Skills (comma separated)"
            className="border border-blue-300 rounded px-1 w-full text-gray-600"
        />
        : <CvSkills skills={skills} stretchSkills={stretchSkills} />;

    const bodyContent = editing
        ? <textarea
            value={body || ""}
            onChange={e => update(`${path}.body`, e.target.value)}
            className="border border-blue-300 rounded px-1 w-full min-h-[4em] resize-y"
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
