import { useCvEdit } from "./CvEditContext";

function CvSkillsLine({ skills, stretch, editing, onUpdate }) {
    const className = "flex flex-wrap text-gray-600 " + (stretch ? "justify-between" : "gap-2");

    if (editing) {
        const elements = [];
        skills.forEach((skill, i) => {
            if (i > 0) elements.push(<span key={`b${i}`}>&bull;</span>);
            elements.push(
                <span
                    key={`s${i}`}
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={e => {
                        const newSkills = [...skills];
                        const text = e.currentTarget.textContent.trim();
                        if (text === "") {
                            newSkills.splice(i, 1);
                        } else {
                            newSkills[i] = text;
                        }
                        onUpdate(newSkills);
                    }}
                    className="outline-none"
                >{skill}</span>
            );
        });
        elements.push(
            <button
                key="add"
                onClick={() => onUpdate([...skills, "Skill"])}
                className="text-xs text-blue-600 print:hidden ml-1"
            >+</button>
        );
        return <div className={className}>{elements}</div>;
    }

    const elements = [];
    skills.forEach((skill, i) => {
        if (i > 0) elements.push(<span key={`b${i}`}>&bull;</span>);
        elements.push(<span key={`s${i}`}>{skill}</span>);
    });

    return <div className={className}>{elements}</div>;
}

function CvSkills({ skills, stretchSkills, entryPath }) {
    const { editing, update } = useCvEdit();

    if (!skills || skills.length === 0) {
        if (editing && entryPath) {
            return (
                <div className="flex text-gray-600 gap-2">
                    <button
                        onClick={() => update(`${entryPath}.skills`, [["Skill"]])}
                        className="text-xs text-blue-600 print:hidden"
                    >+ skill</button>
                </div>
            );
        }
        return null;
    }

    // Normalize: support both 1D (legacy) and 2D arrays
    const lines = Array.isArray(skills[0]) ? skills : [skills];

    return (
        <div className="flex flex-col">
            {lines.map((line, lineIdx) => {
                const stretch = line.length >= 4 && stretchSkills !== false;
                return (
                    <CvSkillsLine
                        key={lineIdx}
                        skills={line}
                        stretch={stretch}
                        editing={editing && !!entryPath}
                        onUpdate={newLine => {
                            const newLines = [...lines];
                            if (newLine.length === 0) {
                                newLines.splice(lineIdx, 1);
                            } else {
                                newLines[lineIdx] = newLine;
                            }
                            update(`${entryPath}.skills`, newLines);
                        }}
                    />
                );
            })}
            {editing && entryPath && (
                <button
                    onClick={() => update(`${entryPath}.skills`, [...lines, ["Skill"]])}
                    className="text-xs text-blue-600 print:hidden self-start"
                >+ line</button>
            )}
        </div>
    );
}

export default CvSkills;
