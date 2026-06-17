import CvPage from "./CvPage";

function CvDocument({ data }) {
    return (
        <div className="grid justify-center bg-gray-500 p-4 a4-page-container gap-8">
            {data.pages.map((page, i) => (
                <CvPage key={i} page={page} entries={data.entries} header={data.header} />
            ))}
        </div>
    );
}

export default CvDocument;
