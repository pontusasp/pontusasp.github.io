import { useRef, useEffect } from "react";
import { useCvEdit } from "./CvEditContext";

function EditableField({ value, onChange, multiline, className }) {
    const { editing } = useCvEdit();
    const ref = useRef(null);
    const valueRef = useRef(value);

    useEffect(() => {
        if (!ref.current) return;
        if (valueRef.current !== value) {
            valueRef.current = value;
            if (multiline) {
                ref.current.innerText = value || "";
            } else {
                ref.current.textContent = value || "";
            }
        }
    }, [value, multiline]);

    useEffect(() => {
        if (editing && ref.current) {
            if (multiline) {
                ref.current.innerText = value || "";
            } else {
                ref.current.textContent = value || "";
            }
        }
    }, [editing]);

    if (!editing) {
        if (multiline) return null;
        return <span className={className}>{value}</span>;
    }

    function handleInput(e) {
        const newValue = multiline ? e.currentTarget.innerText : e.currentTarget.textContent;
        valueRef.current = newValue;
        onChange(newValue);
    }

    if (multiline) {
        return (
            <div
                ref={ref}
                contentEditable
                suppressContentEditableWarning
                onInput={handleInput}
                className={"outline-none whitespace-pre-wrap min-h-[1.5em] " + (className || "")}
            />
        );
    }

    return (
        <span
            ref={ref}
            contentEditable
            suppressContentEditableWarning
            onInput={handleInput}
            className={"outline-none " + (className || "")}
        />
    );
}

export default EditableField;
