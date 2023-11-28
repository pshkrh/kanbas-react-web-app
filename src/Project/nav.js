import { Link, useLocation } from "react-router-dom";
function ProjectNav() {
    const { pathname } = useLocation();
    return (
        <div className="list-group">
            <Link to="/project/home"
                className={`list-group-item ${pathname.includes("home") ? "active" : ""}`}>Home</Link>
            <Link to="/project/signup"
                className={`list-group-item ${pathname.includes("signup") ? "active" : ""}`}>Sign Up</Link>
            <Link to="/project/signin"
                className={`list-group-item ${pathname.includes("signin") ? "active" : ""}`}>Sign In</Link>
            <Link to="/project/account"
                className={`list-group-item ${pathname.includes("account") ? "active" : ""}`}>Account</Link>
            <Link to="/project/users"
                className={`list-group-item ${pathname.includes("users") ? "active" : ""}`}>Users</Link>
        </div>
    );
}
export default ProjectNav;