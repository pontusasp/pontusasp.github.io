import { useState, useRef } from "react";
import CvDocument from "../components/cv/CvDocument";
import defaultCvData from "../data/cv.json";

function Cv() {
    const [data, setData] = useState(defaultCvData);
    const fileInputRef = useRef(null);

    function handleExport() {
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = (data.meta?.name || "cv") + ".json";
        a.click();
        URL.revokeObjectURL(url);
    }

    function handleImport(e) {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const imported = JSON.parse(event.target.result);
                setData(imported);
            } catch {
                alert("Invalid JSON file");
            }
        };
        reader.readAsText(file);
        e.target.value = "";
    }

    return (
        <>
            <div className="flex justify-center gap-4 p-4 bg-gray-500 print:hidden">
                <button
                    onClick={handleExport}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                    Export JSON
                </button>
                <button
                    onClick={() => fileInputRef.current.click()}
                    className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                >
                    Import JSON
                </button>
                <input
                    ref={fileInputRef}
                    type="file"
                    accept=".json"
                    onChange={handleImport}
                    className="hidden"
                />
            </div>
            <CvDocument data={data} />
        </>
    );
}

export default Cv;
