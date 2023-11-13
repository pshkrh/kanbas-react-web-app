import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateCourse, setCourse } from '../Courses/coursesReducer'
import * as client from "./client";

const EditCourse = ({ course, setEditMode }) => {

    const dispatch = useDispatch();

    const [crs, courseChange] = useState(course);

    const handleUpdateCourse = async (course) => {
        const status = await client.updateCourse(course);
        dispatch(updateCourse(course));
        setEditMode(false);
    };

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Edit Course</h5>
                <form>
                    <div className="form-group">
                        <input placeholder="Enter course name" value={crs.name} className="form-control mb-3" onChange={(e) => courseChange({ ...crs, name: e.target.value })} />
                        <input placeholder="Enter course number" value={crs.number} className="form-control mb-3" onChange={(e) => courseChange({ ...crs, number: e.target.value })} />
                        <input placeholder="Enter course start date" value={crs.startDate} className="form-control mb-3" type="date" onChange={(e) => courseChange({ ...crs, startDate: e.target.value })} />
                        <input placeholder="Enter course end date" value={crs.endDate} className="form-control mb-3" type="date" onChange={(e) => courseChange({ ...crs, endDate: e.target.value })} />
                    </div>
                    <button type="submit" className="btn btn-primary me-2"
                        onClick={() => {
                            handleUpdateCourse(crs);
                        }}>
                        Save Changes
                    </button>
                    <button type="button" className="btn btn-secondary" onClick={() => setEditMode(false)}>
                        Cancel
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EditCourse;