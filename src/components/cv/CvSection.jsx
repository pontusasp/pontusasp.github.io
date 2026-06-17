import CvEntry from "./CvEntry";
import CvHeader from "./CvHeader";

function CvSection({ section, entries, header }) {
    if (section.type === "header") {
        return <CvHeader header={header} />;
    }

    const sectionEntries = section.entryIds.map(id => entries.find(e => e.id === id)).filter(Boolean);
    const columns = section.columns || 1;

    const entryList = sectionEntries.map(entry => (
        <CvEntry key={entry.id} {...entry} />
    ));

    if (columns === 1) {
        return (
            <div className="flex flex-col gap-12">
                {section.title && <div className="text-xl font-bold">{section.title}</div>}
                {entryList}
            </div>
        );
    }

    const gridClass = columns === 2 ? "grid grid-cols-2 gap-6" : "grid grid-cols-3 gap-6";

    return (
        <div>
            {section.title && <div className="text-xl font-bold mb-4">{section.title}</div>}
            <div className={gridClass}>
                <div className="flex flex-col gap-12">
                    {entryList.slice(0, Math.ceil(entryList.length / columns))}
                </div>
                <div className="flex flex-col gap-12">
                    {entryList.slice(Math.ceil(entryList.length / columns))}
                </div>
            </div>
        </div>
    );
}

export default CvSection;
