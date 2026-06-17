import CvDocument from "../components/cv/CvDocument";
import cvData from "../data/cv.json";

function Cv() {
    return <CvDocument data={cvData} />;
}

export default Cv;
