import ModuleList from "../Modules/ModuleList";
import ModulesTopRow from "../Modules/ModulesTopRow";
import CourseStatus from "./CourseStatus";

const Home = () => {
    return (
        <div className="row">
            <div className="col-9">
                <ModulesTopRow />
                <ModuleList />
            </div>
            <div className="col-3">
                <CourseStatus />
            </div>

        </div>
    );
}
export default Home;