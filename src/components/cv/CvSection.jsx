import CvEntry from "./CvEntry";
import CvHeader from "./CvHeader";
import { useCvEdit } from "./CvEditContext";

function CvSection({ section, entries, header, pageIdx, secIdx, vgap, hgap }) {
    const ctx = useCvEdit();
    const { editing } = ctx;

    if (section.type === "header") {
        return <CvHeader />;
    }

    const sectionEntries = section.entryIds.map(id => entries.find(e => e.id === id)).filter(Boolean);
    const columns = section.columns || 1;

    const entryList = sectionEntries.map((entry, i) => (
        <div key={entry.id} className={editing ? "relative border-l-2 border-blue-300 pl-2" : ""}>
            {editing && (
                <div className="absolute -top-1 -right-1 flex gap-0.5 print:hidden">
                    <button
                        onClick={() => ctx.moveEntryInSection(pageIdx, secIdx, entry.id, -1)}
                        disabled={i === 0}
                        className="px-1 bg-gray-200 rounded text-xs leading-tight disabled:opacity-30"
                    >↑</button>
                    <button
                        onClick={() => ctx.moveEntryInSection(pageIdx, secIdx, entry.id, 1)}
                        disabled={i === sectionEntries.length - 1}
                        className="px-1 bg-gray-200 rounded text-xs leading-tight disabled:opacity-30"
                    >↓</button>
                    <button
                        onClick={() => ctx.removeEntryFromSection(pageIdx, secIdx, entry.id)}
                        className="px-1 bg-red-200 rounded text-xs leading-tight"
                    >✕</button>
                </div>
            )}
            <CvEntry {...entry} />
        </div>
    ));

    const addEntryControl = editing && (
        <div className="absolute -bottom-4 left-0 flex gap-2 print:hidden z-10">
            <select
                defaultValue=""
                onChange={e => {
                    if (e.target.value === "__new__") {
                        const id = ctx.addEntry();
                        ctx.addEntryToSection(pageIdx, secIdx, id);
                    } else if (e.target.value) {
                        ctx.addEntryToSection(pageIdx, secIdx, e.target.value);
                    }
                    e.target.value = "";
                }}
                className="border rounded px-1 py-0.5 text-xs bg-white"
            >
                <option value="">Add entry...</option>
                <option value="__new__">+ Create new</option>
                {ctx.data.entries
                    .filter(e => !section.entryIds.includes(e.id))
                    .map(e => <option key={e.id} value={e.id}>{e.title}</option>)
                }
            </select>
        </div>
    );

    const columnControl = editing && (
        <div className="absolute -top-4 left-0 flex gap-1 print:hidden z-10">
            <span className="text-xs text-gray-500 mr-1">Col:</span>
            {[1, 2, 3].map(n => (
                <button
                    key={n}
                    onClick={() => ctx.updateSectionColumns(pageIdx, secIdx, n)}
                    className={"px-1.5 rounded text-xs leading-tight " + (columns === n ? "bg-blue-600 text-white" : "bg-gray-200")}
                >{n}</button>
            ))}
        </div>
    );

    if (columns === 1) {
        return (
            <div className={editing ? "relative" : ""}>
                {columnControl}
                {section.title && <div className="text-xl font-bold">{section.title}</div>}
                <div className={"flex flex-col " + (vgap ? "" : editing ? "gap-6" : "gap-12")} style={vgap ? { gap: vgap } : undefined}>
                    {entryList}
                </div>
                {addEntryControl}
            </div>
        );
    }

    const gridClass = columns === 2 ? "grid grid-cols-2" : "grid grid-cols-3";
    const perCol = Math.ceil(entryList.length / columns);
    const colGroups = Array.from({ length: columns }, (_, c) =>
        entryList.slice(c * perCol, (c + 1) * perCol)
    );

    return (
        <div className={editing ? "relative" : ""}>
            {columnControl}
            {section.title && <div className="text-xl font-bold mb-4">{section.title}</div>}
            <div className={gridClass} style={{ columnGap: hgap ?? "1.5rem" }}>
                {colGroups.map((group, c) => (
                    <div key={c} className={"flex flex-col " + (vgap ? "" : editing ? "gap-6" : "gap-12")} style={vgap ? { gap: vgap } : undefined}>{group}</div>
                ))}
            </div>
            {addEntryControl}
        </div>
    );
}

export default CvSection;
