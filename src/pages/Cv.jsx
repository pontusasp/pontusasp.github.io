import { useState, useRef } from "react";
import CvDocument from "../components/cv/CvDocument";
import { CvEditProvider } from "../components/cv/CvEditContext";
import defaultCvData from "../data/cv.json";

function Cv() {
    const [data, setData] = useState(defaultCvData);
    const [editing, setEditing] = useState(false);
    const [sideBySide, setSideBySide] = useState(false);
    const [showToolbar, setShowToolbar] = useState(false);
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
        <CvEditProvider editing={editing} data={data} setData={setData} onToggleToolbar={() => setShowToolbar(s => !s)}>
            {showToolbar && (
                <div className="flex justify-center gap-4 p-4 bg-gray-500 print:hidden">
                    <button
                        onClick={() => setEditing(!editing)}
                        className={"px-4 py-2 rounded text-white " + (editing ? "bg-amber-600 hover:bg-amber-700" : "bg-gray-700 hover:bg-gray-800")}
                    >
                        {editing ? "Stop Editing" : "Edit"}
                    </button>
                    {editing && (
                        <button
                            onClick={() => setSideBySide(!sideBySide)}
                            className={"px-4 py-2 rounded text-white " + (sideBySide ? "bg-purple-600 hover:bg-purple-700" : "bg-gray-700 hover:bg-gray-800")}
                        >
                            {sideBySide ? "Single View" : "Side by Side"}
                        </button>
                    )}
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
            )}
            {editing && sideBySide ? (
                <div className="flex justify-center bg-gray-500">
                    <CvDocument data={data} />
                    <CvEditProvider editing={false} data={data} setData={setData} onToggleToolbar={() => {}}>
                        <CvDocument data={data} />
                    </CvEditProvider>
                </div>
            ) : (
                <CvDocument data={data} />
            )}
        </CvEditProvider>
    );
}

export default Cv;
