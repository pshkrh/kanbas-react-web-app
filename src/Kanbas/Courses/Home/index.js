import ModuleList from "../Modules/ModuleList";
import ModulesTopRow from "../Modules/ModulesTopRow";
import CourseStatus from "./CourseStatus";

const Home = () => {
    return (
        <div className="row">
            <div className="col">
                <ModulesTopRow />
                <ModuleList />
            </div>
            <div className="col-4">
                <CourseStatus />
            </div>

        </div>
    );
}
export default Home;