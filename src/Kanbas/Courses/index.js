import { Navigate, Route, Routes, useParams, useLocation } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import Breadcrumb from "./Breadcrumb";
import "./index.css";

const Courses = ({ courses }) => {
    const { courseId } = useParams();
    const course = courses.find((course) => course._id === courseId);
    const location = useLocation();
    const pathSegments = location.pathname.split("/").filter(segment => segment !== "");

    // Take everything after Kanbas/Courses/CourseName
    const pageNames = pathSegments.slice(3);

    return (
        <div className="container ms-0 me-0 main-content">
            <div className="row">
                <Breadcrumb courseId={course._id} courseName={course.name} pageNames={pageNames} />
            </div>

            <div className="row">
                <div className="col-2">
                    <CourseNavigation />
                </div>
                <div className="col">
                    <div>
                        <div>
                            <Routes>
                                <Route path="/" element={<Navigate to="Home" />} />
                                <Route path="Home" element={<Home />} />
                                <Route path="Home" element={<h1>Home</h1>} />
                                <Route path="Modules" element={<Modules />} />
                                <Route path="Assignments" element={<Assignments />} />
                                <Route path="Assignments/:assignmentId" element={<AssignmentEditor />} />
                                <Route path="Grades" element={<Grades />} />
                            </Routes>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Courses;
