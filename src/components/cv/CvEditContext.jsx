import { createContext, useContext } from "react";

const CvEditContext = createContext(null);

export function useCvEdit() {
    return useContext(CvEditContext);
}

export function CvEditProvider({ editing, data, setData, onToggleToolbar, children }) {
    function update(path, value) {
        setData(prev => {
            const next = structuredClone(prev);
            const parts = path.replace(/\[(\d+)\]/g, ".$1").split(".");
            let obj = next;
            for (let i = 0; i < parts.length - 1; i++) {
                obj = obj[parts[i]];
            }
            obj[parts[parts.length - 1]] = value;
            return next;
        });
    }

    function addEntry() {
        const id = "entry-" + Date.now();
        setData(prev => ({
            ...prev,
            entries: [...prev.entries, { id, title: "New Entry", date: "", skills: [], body: "" }]
        }));
        return id;
    }

    function removeEntry(id) {
        setData(prev => ({
            ...prev,
            entries: prev.entries.filter(e => e.id !== id),
            pages: prev.pages.map(page => ({
                ...page,
                sections: page.sections.map(sec =>
                    sec.entryIds ? { ...sec, entryIds: sec.entryIds.filter(eid => eid !== id) } : sec
                )
            }))
        }));
    }

    function addSection(pageIdx) {
        setData(prev => {
            const next = structuredClone(prev);
            next.pages[pageIdx].sections.push({ type: "entries", columns: 1, entryIds: [] });
            return next;
        });
    }

    function removeSection(pageIdx, secIdx) {
        setData(prev => {
            const next = structuredClone(prev);
            next.pages[pageIdx].sections.splice(secIdx, 1);
            return next;
        });
    }

    function addEntryToSection(pageIdx, secIdx, entryId) {
        setData(prev => {
            const next = structuredClone(prev);
            next.pages[pageIdx].sections[secIdx].entryIds.push(entryId);
            return next;
        });
    }

    function removeEntryFromSection(pageIdx, secIdx, entryId) {
        setData(prev => {
            const next = structuredClone(prev);
            const ids = next.pages[pageIdx].sections[secIdx].entryIds;
            next.pages[pageIdx].sections[secIdx].entryIds = ids.filter(id => id !== entryId);
            return next;
        });
    }

    function moveEntryInSection(pageIdx, secIdx, entryId, direction) {
        setData(prev => {
            const next = structuredClone(prev);
            const ids = next.pages[pageIdx].sections[secIdx].entryIds;
            const idx = ids.indexOf(entryId);
            const newIdx = idx + direction;
            if (newIdx < 0 || newIdx >= ids.length) return prev;
            [ids[idx], ids[newIdx]] = [ids[newIdx], ids[idx]];
            return next;
        });
    }

    function updateSectionColumns(pageIdx, secIdx, columns) {
        setData(prev => {
            const next = structuredClone(prev);
            next.pages[pageIdx].sections[secIdx].columns = columns;
            return next;
        });
    }

    function addPage() {
        setData(prev => ({
            ...prev,
            pages: [...prev.pages, { layout: "full", sections: [{ type: "entries", columns: 1, entryIds: [] }] }]
        }));
    }

    function removePage(pageIdx) {
        setData(prev => ({
            ...prev,
            pages: prev.pages.filter((_, i) => i !== pageIdx)
        }));
    }

    const ctx = {
        editing, data, update,
        addEntry, removeEntry,
        addSection, removeSection,
        addEntryToSection, removeEntryFromSection,
        moveEntryInSection, updateSectionColumns,
        addPage, removePage, onToggleToolbar
    };

    return <CvEditContext.Provider value={ctx}>{children}</CvEditContext.Provider>;
}
