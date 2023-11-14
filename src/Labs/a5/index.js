import SimpleAPIExamples from "./SimpleAPIExamples.js";
import EncodingParametersInURLs from "./EncodingParametersInURLs.js";
import WorkingWithObjects from "./WorkingWithObjects.js";
import WorkingWithArrays from "./WorkingWithArrays.js";

function Assignment5() {
    const API_BASE = process.env.REACT_APP_LAB_API_BASE;
    const API_URL = `${API_BASE}/a5`;
    return (
        <div>
            <h1>Assignment 5</h1>
            <div className="list-group">
                <a href={`${API_URL}/welcome`}
                    className="list-group-item">
                    Welcome
                </a>
            </div>
            <SimpleAPIExamples />
            <EncodingParametersInURLs />
            <WorkingWithObjects />
            <WorkingWithArrays />
        </div>
    );
}
export default Assignment5;