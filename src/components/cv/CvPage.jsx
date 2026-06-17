import CvSection from "./CvSection";

function CvPage({ page, entries, header }) {
    if (page.layout === "split") {
        const gridTemplate = page.columns.map(c => `${c}fr`).join(" ");
        const sectionsByColumn = {};
        page.sections.forEach(section => {
            const col = section.column ?? 0;
            if (!sectionsByColumn[col]) sectionsByColumn[col] = [];
            sectionsByColumn[col].push(section);
        });

        return (
            <div className="a4-page bg-white border-blue-800 grid" style={{ gridTemplateColumns: gridTemplate }}>
                {page.columns.map((_, colIdx) => {
                    const sections = sectionsByColumn[colIdx] || [];
                    const isMainContent = colIdx > 0;
                    return (
                        <div key={colIdx} className={isMainContent ? "p-12" : ""}>
                            {sections.map((section, i) => (
                                <CvSection key={i} section={section} entries={entries} header={header} />
                            ))}
                        </div>
                    );
                })}
            </div>
        );
    }

    return (
        <div className="a4-page bg-white p-12">
            {page.sections.map((section, i) => (
                <div key={i} className={i > 0 ? "pt-16" : ""}>
                    <CvSection section={section} entries={entries} header={header} />
                </div>
            ))}
        </div>
    );
}

export default CvPage;
