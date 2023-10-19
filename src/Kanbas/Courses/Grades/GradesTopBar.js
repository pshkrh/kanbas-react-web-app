import "./index.css"

const GradesTopBar = () => {
    return (
        <div>
            <div className="d-flex gap-2 align-items-center justify-content-end">
                <button type="button" className="btn btn-secondary"><i
                    className="fa-solid fa-file-import me-2"></i>Import</button>
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="fa-solid fa-file-export me-2"></i>Export
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Export option 1</a></li>
                        <li><a className="dropdown-item" href="#">Export option 2</a></li>
                        <li><a className="dropdown-item" href="#">Export option 3</a></li>
                    </ul>
                </div>
                <button type="button" className="btn btn-secondary"><i className="fa-solid fa-gear"></i></button>
            </div>

            <div className="row mb-2">
                <div className="col-md-6">
                    <b>Student Names</b>
                </div>
                <div className="col-md-6">
                    <b>Assignment Names</b>
                </div>
            </div>
            <div className="row mb-2">

                <div className="col-md-6">
                    <div className="input-group">
                        <span className="input-group-text"><i
                            className="fa-solid fa-magnifying-glass"></i></span>
                        <input type="text" className="form-control" placeholder="Search Students" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="input-group">
                        <span className="input-group-text"><i
                            className="fa-solid fa-magnifying-glass"></i></span>
                        <input type="text" className="form-control" placeholder="Search Assignments" />
                    </div>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-md-6">
                    <button type="button" className="btn btn-secondary"><i
                        className="fa-solid fa-filter me-2"></i>Apply Filters</button>
                </div>
            </div>
        </div>
    )
}
export default GradesTopBar;