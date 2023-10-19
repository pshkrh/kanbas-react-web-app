import { Link, useParams } from "react-router-dom";
import db from "../../Database";

const AssignmentList = () => {
    const { courseId } = useParams();
    const assignments = db.assignments;
    const courseAssignments = assignments.filter(
        (assignment) => assignment.course === courseId);
    return (
        <ul className="list-group square-list-group mb-3">
            <li className="list-group-item list-group-item-secondary">
                <div className="d-flex justify-content-start align-items-center">
                    <i className="fa-solid fa-grip-vertical me-2"></i>
                    <i className="fa-solid fa-caret-down me-2"></i>
                    <div className="assignment-title flex-grow-1">Assignments</div>
                    <small className="border border-black rounded-pill p-1 me-3">40% of Total</small>
                    <i className="fa-solid fa-plus me-3"></i>
                    <i className="fa-solid fa-ellipsis-vertical fa-lg"></i>
                </div>
            </li>
            {courseAssignments.map((assignment, index) => (
                <li className="list-group-item assignment-border" key={index}>
                    <div className="d-flex justify-content-start align-items-center">
                        <i className="fa-solid fa-grip-vertical me-2"></i>
                        <i className="fa-solid fa-file-pen assignment-item-icon fa-lg p-3"></i>
                        <div className="assignment-item flex-grow-1">
                            <div className="d-flex flex-column">
                                <div className="assignment-item">
                                    <Link
                                        key={assignment._id}
                                        to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                                        className="assignment-link">
                                        {assignment.title}
                                    </Link>
                                </div>
                                <small className="text-body-secondary">{assignment.week}</small>
                                <small className="text-body-secondary">
                                    <b>Due</b> {assignment.dueDate} | {assignment.points} pts
                                </small>
                            </div>
                        </div>
                        <i className="fa-solid fa-circle-check fa-lg me-3" style={{ color: 'green' }}></i>
                        <i className="fa-solid fa-ellipsis-vertical fa-lg"></i>
                    </div>
                </li>
            ))}
        </ul>
    );
}
export default AssignmentList;