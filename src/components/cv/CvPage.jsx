import CvSection from "./CvSection";
import { useCvEdit } from "./CvEditContext";

function CvPage({ page, entries, header, pageIdx }) {
    const { editing, addSection, removeSection, removePage } = useCvEdit();

    const pageControls = editing && (
        <div className="flex gap-2 mt-4 print:hidden justify-center">
            <button
                onClick={() => addSection(pageIdx)}
                className="px-3 py-1 bg-blue-500 text-white rounded text-sm"
            >+ Section</button>
            <button
                onClick={() => removePage(pageIdx)}
                className="px-3 py-1 bg-red-500 text-white rounded text-sm"
            >Remove Page</button>
        </div>
    );

    if (page.layout === "split") {
        const gridTemplate = page.columns.map(c => `${c}fr`).join(" ");
        const sectionsByColumn = {};
        page.sections.forEach((section, idx) => {
            const col = section.column ?? 0;
            if (!sectionsByColumn[col]) sectionsByColumn[col] = [];
            sectionsByColumn[col].push({ section, idx });
        });

        return (
            <div>
                <div className="a4-page bg-white border-blue-800 grid" style={{ gridTemplateColumns: gridTemplate }}>
                    {page.columns.map((_, colIdx) => {
                        const sections = sectionsByColumn[colIdx] || [];
                        const isMainContent = colIdx > 0;
                        return (
                            <div key={colIdx} className={isMainContent ? "p-12" : ""}>
                                {sections.map(({ section, idx }) => (
                                    <div key={idx} className={editing ? "relative" : ""}>
                                        {editing && section.type !== "header" && (
                                            <button
                                                onClick={() => removeSection(pageIdx, idx)}
                                                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 text-xs print:hidden"
                                            >✕</button>
                                        )}
                                        <CvSection section={section} entries={entries} header={header} pageIdx={pageIdx} secIdx={idx} />
                                    </div>
                                ))}
                            </div>
                        );
                    })}
                </div>
                {pageControls}
            </div>
        );
    }

    return (
        <div>
            <div className="a4-page bg-white p-12">
                {page.sections.map((section, i) => (
                    <div key={i} className={(i > 0 ? "pt-16 " : "") + (editing ? "relative" : "")}>
                        {editing && (
                            <button
                                onClick={() => removeSection(pageIdx, i)}
                                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 text-xs print:hidden z-10"
                            >✕</button>
                        )}
                        <CvSection section={section} entries={entries} header={header} pageIdx={pageIdx} secIdx={i} />
                    </div>
                ))}
            </div>
            {pageControls}
        </div>
    );
}

export default CvPage;
