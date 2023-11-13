import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaGripVertical, FaCaretDown, FaPlus, FaEllipsisVertical, FaCircleCheck, FaLink, FaArrowUpRightFromSquare } from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux";
import {
    addModule,
    deleteModule,
    updateModule,
    setModules,
} from "./modulesReducer";
import * as client from "./client";

function ModuleList() {
    const { courseId } = useParams();

    useEffect(() => {
        client.findModulesForCourse(courseId)
            .then((modules) =>
                dispatch(setModules(modules))
            );
    }, [courseId]);

    const modules = useSelector((state) => state.modulesReducer.modules);
    const dispatch = useDispatch();

    const initialEditingModule = {
        title: "",
        submodules: [{
            subtitle: "",
            items: [{ title: "" }]
        }],
    };

    // New state to manage the module being edited
    const [editingModule, setEditingModule] = useState(initialEditingModule);

    // Function to handle edit button click
    const handleEdit = (module) => {
        setEditingModule(module);
    };

    const handleAddModule = () => {
        client.createModule(courseId, editingModule).then((module) => {
            dispatch(addModule(module));
            setEditingModule(initialEditingModule);
        });
    };

    const handleDeleteModule = (moduleId) => {
        client.deleteModule(moduleId).then((status) => {
            dispatch(deleteModule(moduleId));
        });
    };

    const handleUpdateModule = async (module) => {
        const status = await client.updateModule(module);
        dispatch(updateModule(module));
        setEditingModule(initialEditingModule);
    };

    return (
        <div>
            <div className="module-add mb-3 p-3 border rounded">
                <div className="row">
                    <div className="col-9">
                        {/* Module Title Field */}
                        <input className="form-control mb-2"
                            value={editingModule?.title ?? ''}
                            onChange={(e) => setEditingModule({ ...editingModule, title: e.target.value })}
                            placeholder="Module Title" />

                        {/* Handling submodules */}
                        {editingModule && editingModule.submodules.map((submodule, index) => (
                            <div key={index}>
                                <input className="form-control mb-2"
                                    value={submodule.subtitle}
                                    onChange={(e) => {
                                        const newEditingModule = JSON.parse(JSON.stringify(editingModule)); // Deep clone
                                        newEditingModule.submodules[index].subtitle = e.target.value;
                                        setEditingModule(newEditingModule);
                                    }}
                                    placeholder="Subtitle" />

                                {/* Handling items within each submodule */}
                                {submodule.items.map((item, itemIndex) => (
                                    <input className="form-control mb-2"
                                        value={item.title}
                                        onChange={(e) => {
                                            const newEditingModule = JSON.parse(JSON.stringify(editingModule)); // Deep clone
                                            newEditingModule.submodules[index].items[itemIndex].title = e.target.value;
                                            setEditingModule(newEditingModule);
                                        }}
                                        placeholder="Item Title" />
                                ))}
                            </div>
                        ))}
                    </div>
                    <div className="col-3">
                        <button type="button" className="btn btn-primary me-1" onClick={() => handleUpdateModule(editingModule)}>
                            Update
                        </button>
                        <button type="button" className="btn btn-success"
                            onClick={handleAddModule}>
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
                                    onClick={() => handleEdit(module)}>
                                    Edit
                                </button>

                                <button type="button" className="btn btn-danger me-2"
                                    onClick={() => handleDeleteModule(module._id)}>
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