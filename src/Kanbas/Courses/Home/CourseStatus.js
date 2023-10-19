import './index.css'

const CourseStatus = () => {
    return (
        <div>
            <h5>Course Status</h5>
            <div className="d-flex mb-2 gap-1">
                <button type="button" className="btn btn-secondary"><i
                    className="fa-solid fa-ban me-2"></i>Unpublish</button>
                <button type="button" className="btn btn-success" disabled><i
                    className="fa-regular fa-circle-check me-2"
                    style={{ color: 'lightgreen' }}></i>Published</button>
            </div>

            <div className="d-flex flex-column">
                <button className="btn btn-secondary mb-2 text-start"><i
                    className="fa-solid fa-file-import me-2"></i>Import Existing Content</button>
                <button className="btn btn-secondary mb-2 text-start"><i
                    className="fa-solid fa-right-from-bracket me-2"></i>Import From Commons</button>
                <button className="btn btn-secondary mb-2 text-start"><i
                    className="fa-solid fa-crosshairs me-2"></i>Choose Home Page</button>
                <button className="btn btn-secondary mb-2 text-start"><i
                    className="fa-solid fa-chart-simple me-2"></i>View Course Stream</button>
                <button className="btn btn-secondary mb-2 text-start"><i
                    className="fa-solid fa-bullhorn me-2"></i>New
                    Announcement</button>
                <button className="btn btn-secondary mb-2 text-start"><i
                    className="fa-solid fa-chart-simple me-2"></i>New Analytics</button>
                <button className="btn btn-secondary mb-2 text-start"><i
                    className="fa-regular fa-bell me-2"></i>View
                    Course Notifications</button>
            </div>

            <div className="mt-3 mb-3">
                <h6 className="m-0">To Do</h6>
                <hr className="mt-1" />
            </div>

            <div className="d-flex flex-row justify-content-between mb-3">
                <i className="fa-solid fa-circle-info" style={{ color: 'red' }}></i>
                <div className="d-flex flex-column mb-3">
                    <h6 className="todo-item">Grade A1 - ENV + HTML</h6>
                    <small className="text-body-secondary">100 points • Sep 18 at 11:59pm</small>
                </div>
                <i className="fa-solid fa-xmark" style={{ color: 'grey' }}></i>
            </div>

            <div className="d-flex justify-content-between align-items-center">
                <h6 className="m-0">Coming Up</h6>
                <a className="link" href="#"><i className="fa-regular fa-calendar"></i> View Calendar</a>
            </div>

            <hr className="mt-1" />

            <div className="d-flex flex-column gap-3">
                <div className="d-flex flex-row gap-2 align-items-stretch">
                    <i className="fa-regular fa-calendar"></i>
                    <div className="d-flex flex-column">
                        <a className="link" href="#">Lecture</a>
                        <small className="text-body-secondary">CS4550.12631.202410</small>
                        <small className="text-body-secondary">Sep 7 at 11:45am</small>
                    </div>
                </div>

                <div className="d-flex flex-row gap-2 align-items-stretch">
                    <i className="fa-regular fa-calendar"></i>
                    <div className="d-flex flex-column">
                        <a className="link" href="#">CS5610.06 SP23 Lecture</a>
                        <small className="text-body-secondary">CS4550.12631.202410</small>
                        <small className="text-body-secondary">Sep 11 at 11:45am</small>
                    </div>
                </div>

                <div className="d-flex flex-row gap-2 align-items-stretch">
                    <i className="fa-regular fa-calendar"></i>
                    <div className="d-flex flex-column">
                        <a className="link" href="#">Lecture</a>
                        <small className="text-body-secondary">CS4550.12631.202410</small>
                        <small className="text-body-secondary">Sep 11 at 6pm</small>
                    </div>
                </div>

                <small><a className="link" href="#">12 more in the next week...</a></small>
            </div>
        </div>
    )
}
export default CourseStatus;