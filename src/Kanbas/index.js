import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import Account from "./Account";
import { useState, useEffect } from "react";
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import "./index.css";
import axios from "axios";

const Kanbas = () => {
    const [courses, setCourses] = useState([]);
    const API_BASE = process.env.REACT_APP_API_BASE;
    const COURSES_URL = `${API_BASE}/courses`;
    const findAllCourses = async () => {
        const response = await axios.get(COURSES_URL);
        setCourses(response.data);
    };
    useEffect(() => {
        findAllCourses();
    }, []);

    return (
        <div className="d-flex">
            <KanbasNavigation />
            <Routes>
                <Route path="/" element={<Navigate to="Dashboard" />} />
                <Route path="Account" element={<Account />} />
                <Route path="Dashboard" element={<Dashboard />} />
                <Route path="Courses/:courseId/*" element={<Courses courses={courses} />} />
            </Routes>
        </div>
    );
}
export default Kanbas;