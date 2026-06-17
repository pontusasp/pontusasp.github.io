import CvEntry from "./CvEntry";
import CvHeader from "./CvHeader";
import { useCvEdit } from "./CvEditContext";

function CvSection({ section, entries, header, pageIdx, secIdx }) {
    const ctx = useCvEdit();
    const { editing } = ctx;

    if (section.type === "header") {
        return <CvHeader />;
    }

    const sectionEntries = section.entryIds.map(id => entries.find(e => e.id === id)).filter(Boolean);
    const columns = section.columns || 1;

    const entryList = sectionEntries.map((entry, i) => (
        <div key={entry.id} className={editing ? "relative border border-dashed border-blue-300 p-2 rounded" : ""}>
            {editing && (
                <div className="absolute -top-3 right-0 flex gap-1 print:hidden">
                    <button
                        onClick={() => ctx.moveEntryInSection(pageIdx, secIdx, entry.id, -1)}
                        disabled={i === 0}
                        className="px-1 bg-gray-200 rounded text-xs disabled:opacity-30"
                    >↑</button>
                    <button
                        onClick={() => ctx.moveEntryInSection(pageIdx, secIdx, entry.id, 1)}
                        disabled={i === sectionEntries.length - 1}
                        className="px-1 bg-gray-200 rounded text-xs disabled:opacity-30"
                    >↓</button>
                    <button
                        onClick={() => ctx.removeEntryFromSection(pageIdx, secIdx, entry.id)}
                        className="px-1 bg-red-200 rounded text-xs"
                    >✕</button>
                </div>
            )}
            <CvEntry {...entry} />
        </div>
    ));

    const addEntryControl = editing && (
        <div className="flex gap-2 mt-4 print:hidden">
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
                className="border rounded px-2 py-1 text-sm"
            >
                <option value="">Add entry...</option>
                <option value="__new__">+ Create new entry</option>
                {ctx.data.entries
                    .filter(e => !section.entryIds.includes(e.id))
                    .map(e => <option key={e.id} value={e.id}>{e.title}</option>)
                }
            </select>
        </div>
    );

    const columnControl = editing && (
        <div className="flex gap-1 mb-2 print:hidden">
            <span className="text-xs text-gray-500 mr-1">Columns:</span>
            {[1, 2, 3].map(n => (
                <button
                    key={n}
                    onClick={() => ctx.updateSectionColumns(pageIdx, secIdx, n)}
                    className={"px-2 py-0.5 rounded text-xs " + (columns === n ? "bg-blue-600 text-white" : "bg-gray-200")}
                >{n}</button>
            ))}
        </div>
    );

    if (columns === 1) {
        return (
            <div>
                {columnControl}
                {section.title && <div className="text-xl font-bold">{section.title}</div>}
                <div className="flex flex-col gap-12">
                    {entryList}
                </div>
                {addEntryControl}
            </div>
        );
    }

    const gridClass = columns === 2 ? "grid grid-cols-2 gap-6" : "grid grid-cols-3 gap-6";
    const perCol = Math.ceil(entryList.length / columns);
    const colGroups = Array.from({ length: columns }, (_, c) =>
        entryList.slice(c * perCol, (c + 1) * perCol)
    );

    return (
        <div>
            {columnControl}
            {section.title && <div className="text-xl font-bold mb-4">{section.title}</div>}
            <div className={gridClass}>
                {colGroups.map((group, c) => (
                    <div key={c} className="flex flex-col gap-12">{group}</div>
                ))}
            </div>
            {addEntryControl}
        </div>
    );
}

export default CvSection;
