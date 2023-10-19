import React from "react";
import AssignmentList from "./AssignmentList";
import AssignmentsTopBar from "./AssignmentsTopBar";
import "./index.css";

const Assignments = () => {
    return (
        <div>
            <AssignmentsTopBar />
            <AssignmentList />
        </div>
    )
}
export default Assignments;

