import CvPage from "./CvPage";
import { useCvEdit } from "./CvEditContext";

function CvDocument({ data }) {
    const { editing, addPage } = useCvEdit();

    return (
        <div className="grid justify-center bg-gray-500 p-4 a4-page-container gap-8">
            {data.pages.map((page, i) => (
                <CvPage key={i} page={page} entries={data.entries} header={data.header} pageIdx={i} />
            ))}
            {editing && (
                <button
                    onClick={addPage}
                    className="px-4 py-2 bg-blue-600 text-white rounded self-center justify-self-center print:hidden"
                >+ Add Page</button>
            )}
        </div>
    );
}

export default CvDocument;
