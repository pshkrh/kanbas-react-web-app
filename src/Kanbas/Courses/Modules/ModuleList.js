import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";


function ModuleList() {
    const { courseId } = useParams();
    const modules = db.modules;
    return (
        <div>
            {modules.map((module, index) => (
                <ul className="list-group mb-3" key={index}>
                    <li className="list-group-item list-group-item-secondary">
                        <div className="d-flex justify-content-start align-items-center">
                            <i className="fa-solid fa-grip-vertical me-2"></i>
                            <i className="fa-solid fa-caret-down me-2"></i>
                            <div className="module-title flex-grow-1">{module.title}</div>
                            <i className="fa-solid fa-circle-check fa-lg me-1" style={{ color: 'green' }}></i>
                            <i className="fa-solid fa-caret-down me-2"></i>
                            <i className="fa-solid fa-plus me-3"></i>
                            <i className="fa-solid fa-ellipsis-vertical fa-lg"></i>
                        </div>
                    </li>
                    {module.submodules.map((submodule, subIndex) => (
                        <div key={subIndex}>
                            <li className="list-group-item module-border">
                                <div className="d-flex justify-content-start align-items-center">
                                    <i className="fa-solid fa-grip-vertical me-2"></i>
                                    <div className="module-subtitle flex-grow-1">{submodule.subtitle}</div>
                                    <i className="fa-solid fa-circle-check fa-lg me-3" style={{ color: 'green' }}></i>
                                    <i className="fa-solid fa-ellipsis-vertical fa-lg"></i>
                                </div>
                            </li>
                            {submodule.items.map((item, itemIndex) => (
                                <li className="list-group-item module-border" key={itemIndex}>
                                    <div className="d-flex justify-content-start align-items-center">
                                        <i className="fa-solid fa-grip-vertical me-2"></i>
                                        <div className="module-item flex-grow-1">{item}</div>
                                        <i className="fa-solid fa-circle-check fa-lg me-3" style={{ color: 'green' }}></i>
                                        <i className="fa-solid fa-ellipsis-vertical fa-lg"></i>
                                    </div>
                                </li>
                            ))}
                        </div>
                    ))}
                </ul>
            ))}
        </div>
    );
}
export default ModuleList;