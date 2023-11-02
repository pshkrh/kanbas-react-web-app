import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import Account from "./Account";
import db from "./Database";
import { useState } from "react";
import store from "./store";
import { Provider, useSelector } from "react-redux";
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import "./index.css";
import { addCourse, deleteCourse, updateCourse, setCourse } from "./Courses/coursesReducer";

const Kanbas = () => {
    const courses = useSelector((state) => state.coursesReducer.courses);
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