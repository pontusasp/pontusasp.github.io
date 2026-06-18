import { useCvEdit } from "./CvEditContext";

function CvSkills({ skills, stretchSkills, entryPath }) {
    const { editing, update } = useCvEdit();

    if (!skills || skills.length === 0) {
        if (editing && entryPath) {
            return (
                <div className="flex text-gray-600 gap-2">
                    <button
                        onClick={() => update(`${entryPath}.skills`, ["Skill"])}
                        className="text-xs text-blue-600 print:hidden"
                    >+ skill</button>
                </div>
            );
        }
        return null;
    }

    const stretch = skills.length >= 4 && stretchSkills !== false;
    const className = "flex flex-wrap text-gray-600 " + (stretch ? "justify-between" : "gap-2");

    if (editing && entryPath) {
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
                        update(`${entryPath}.skills`, newSkills);
                    }}
                    className="outline-none"
                >{skill}</span>
            );
        });
        elements.push(
            <button
                key="add"
                onClick={() => update(`${entryPath}.skills`, [...skills, "Skill"])}
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

export default CvSkills;
