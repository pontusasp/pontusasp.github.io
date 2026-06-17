import { useCvEdit } from "./CvEditContext";

function EditableField({ value, onChange, multiline, className }) {
    const { editing } = useCvEdit();

    if (!editing) {
        return <span className={className}>{value}</span>;
    }

    if (multiline) {
        return (
            <textarea
                value={value || ""}
                onChange={e => onChange(e.target.value)}
                className={"border border-blue-300 rounded px-1 w-full min-h-[4em] resize-y " + (className || "")}
            />
        );
    }

    return (
        <input
            type="text"
            value={value || ""}
            onChange={e => onChange(e.target.value)}
            className={"border border-blue-300 rounded px-1 w-full " + (className || "")}
        />
    );
}

export default EditableField;
