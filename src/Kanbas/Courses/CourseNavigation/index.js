import { Link, useParams, useLocation } from 'react-router-dom';
import { FaEyeSlash } from 'react-icons/fa';
import './index.css';

function CourseNavigation() {
    const links = ["Home", "Modules", "Piazza", "Zoom Meetings", "Assignments", "Quizzes", "Grades", "People", "Panopto Video", "Discussions", "Announcements", "Pages",
        "Files", "Rubrics", "Outcomes", "Collaborations", "Syllabus", "Progress Reports (EAB Navigate)", "Settings",];

    const { courseId } = useParams();
    const { pathname } = useLocation();

    return (
        <ul className="course-nav">
            {links.map((link, index) => (
                <li key={index} className={pathname.includes(link) ? 'course-nav-selected' : ''}>
                    <Link to={`/Kanbas/Courses/${courseId}/${link.toLowerCase()}/screen.html`}>{link}</Link>
                    {link === 'Discussions' || link === 'Announcements' || link === 'Pages' || link === 'Files' || link === 'Rubrics' || link === 'Outcomes' || link === 'Collaborations' || link === 'Syllabus' ? (
                        <i className="fa-regular fa-eye-slash fa-flip-horizontal">
                            <FaEyeSlash className="fa-2x" />
                        </i>
                    ) : null}
                </li>
            ))}
        </ul>
    );
}

export default CourseNavigation;