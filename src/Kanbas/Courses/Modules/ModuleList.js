import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { FaGripVertical, FaCaretDown, FaPlus, FaEllipsisVertical, FaCircleCheck, FaLink, FaArrowUpRightFromSquare } from "react-icons/fa6";

function ModuleList() {
    const { courseId } = useParams();
    const modules = db.modules;
    return (
        <div>
            {modules.map((module, index) => (
                <ul className="list-group mb-3" key={index}>
                    <li className="list-group-item list-group-item-secondary">
                        <div className="d-flex justify-content-start align-items-center">
                            <FaGripVertical className="me-2" />
                            <FaPlus className="me-2" />
                            <div className="module-title flex-grow-1">{module.title}</div>
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
    );
}
export default ModuleList;