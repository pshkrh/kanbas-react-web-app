import { Link, useParams, useLocation } from 'react-router-dom';
import { FaEyeSlash } from 'react-icons/fa';
import './index.css';

function CourseNavigation() {
    const links = ["Home", "Modules", "Piazza", "Zoom Meetings", "Assignments", "Quizzes", "Grades", "People", "Panopto Video", "Discussions", "Announcements", "Pages",
        "Files", "Rubrics", "Outcomes", "Collaborations", "Syllabus", "Progress Reports (EAB Navigate)", "Settings",];

    const { courseId } = useParams();
    const { pathname } = useLocation();

    return (
        <div>
            <p className="cnav-small-text text-body-secondary"><i>202410_1 Fall 2023 Semester</i></p>
            <ul className="course-nav">
                {links.map((link, index) => (
                    <li key={index} className={pathname.includes(link) ? 'course-nav-selected' : ''}>
                        <Link to={`/Kanbas/Courses/${courseId}/${link}`}>{link}</Link>
                        {link === 'Discussions' || link === 'Announcements' || link === 'Pages' || link === 'Files' || link === 'Rubrics' || link === 'Outcomes' || link === 'Collaborations' || link === 'Syllabus' ? (
                            <FaEyeSlash className="ms-1 fa-2x" />
                        ) : null}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CourseNavigation;