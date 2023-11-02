import React, { useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { FaGripVertical, FaCaretDown, FaPlus, FaEllipsisVertical, FaCircleCheck, FaLink, FaArrowUpRightFromSquare } from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux";
import {
    addModule,
    deleteModule,
    updateModule,
    setModule,
} from "./modulesReducer";

function ModuleList() {
    const { courseId } = useParams();
    const modules = useSelector((state) => state.modulesReducer.modules);
    const module = useSelector((state) => state.modulesReducer.module);
    const dispatch = useDispatch();

    return (
        <div>

            <div className="module-add mb-3 p-3 border rounded">
                <div className="row">
                    <div className="col-9">
                        <input className="form-control mb-2" value={module.name}
                            onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
                            placeholder="Module Name" />
                        <textarea className="form-control mb-2" value={module.description}
                            onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
                            placeholder="Module Description" />
                    </div>
                    <div className="col-3">
                        <button type="button" className="btn btn-primary me-1"
                            onClick={() => dispatch(updateModule(module))}>
                            Update
                        </button>
                        <button type="button" className="btn btn-success"
                            onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
                            Add
                        </button>
                    </div>
                </div>


            </div>


            <div className="module-list">
                {modules.filter((module) => module.course === courseId).map((module, index) => (
                    <ul className="list-group mb-3" key={index}>
                        <li className="list-group-item list-group-item-secondary">
                            <div className="d-flex justify-content-start align-items-center">
                                <FaGripVertical className="me-2" />
                                <FaPlus className="me-2" />
                                <div className="module-title flex-grow-1">{module.title}</div>
                                <button type="button" className="btn btn-success me-1"
                                    onClick={() => dispatch(setModule(module))}>
                                    Edit
                                </button>

                                <button type="button" className="btn btn-danger me-2"
                                    onClick={() => dispatch(deleteModule(module._id))}>
                                    Delete
                                </button>

                                <FaCircleCheck className="me-2" style={{ color: "green" }} />
                                <FaCaretDown className="me-2" />
                                <FaPlus className="me-3" />
                                <FaEllipsisVertical />
                            </div>
                        </li>
                        {module.submodules.map((submodule, subIndex) => (
                            <div key={subIndex}>
                                <li className="list-group-item module-border">
                                    <div className="d-flex justify-content-start align-items-center">
                                        <FaGripVertical className="me-2" />
                                        <div className="module-subtitle flex-grow-1">
                                            {submodule.subtitle.toUpperCase()}
                                        </div>
                                        <FaCircleCheck className="me-3" style={{ color: "green" }} />
                                        <FaEllipsisVertical />
                                    </div>
                                </li>
                                {submodule.items.length > 0 && submodule.items.map((item, itemIndex) => (
                                    <li
                                        className={`list-group-item module-border ${submodule.subtitle === "Slides" ? "slides-item" : ""
                                            }`}
                                        key={itemIndex}
                                    >
                                        <div className="d-flex justify-content-start align-items-center">
                                            <FaGripVertical className="me-2" />
                                            {submodule.subtitle === "Slides" && (
                                                <FaLink style={{ color: "green" }} />
                                            )}
                                            {submodule.subtitle === "Slides" ? (
                                                <>
                                                    <div className="module-link flex-grow-1">
                                                        <a
                                                            className="link"
                                                            href={item.url}
                                                        >
                                                            <span className="me-1">{item.title}</span>
                                                            <FaArrowUpRightFromSquare className="link" />
                                                        </a>
                                                    </div>
                                                </>
                                            ) : (
                                                <span className="module-item flex-grow-1">
                                                    {item.title}
                                                </span>
                                            )}
                                            <FaCircleCheck className="me-3" style={{ color: "green" }} />
                                            <FaEllipsisVertical />
                                        </div>
                                    </li>
                                ))}
                            </div>
                        ))}
                    </ul>
                ))}
            </div>
        </div>
    );
}
export default ModuleList;