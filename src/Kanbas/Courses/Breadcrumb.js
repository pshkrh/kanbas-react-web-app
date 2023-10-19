import { FaGlasses, FaBars, FaChevronDown } from 'react-icons/fa6';

const Breadcrumb = ({ courseName }) => {
    return (
        <div>
            {/* <!-- Mobile Top Bar --> */}
            <div className="col-12 d-block d-sm-none">
                <div className="row fs-4 ps-0 pb-0 d-block d-lg-none">
                    <div className="col-12 text-center text-white bg-dark pt-4 pb-4 fs-4 align-middle">
                        <a href="/Kanbas/Courses/CourseNavigation/menu.html"
                            className="text-decoration-none float-end fs-3">
                            <FaChevronDown className="text-white" />
                        </a>
                        <a className="text-decoration-none text-danger fs-3"
                            href="/Kanbas/KanbasNavigation/menu.html">
                            <FaBars className="float-start mt-1 text-white" />
                        </a>
                        <a className="text-decoration-none" href="#">
                            <FaGlasses className="float-end mt-1 me-3 text-white" />
                        </a>
                        <div><a className="text-white" href="#"><u>{courseName} <br /> Home</u></a>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- top bar --> */}
            <div className="d-flex flex-row align-items-center p-2 ms-2">
                <a href="#" className="link">
                    <FaBars className="breadcrumb-icon fa-lg d-none d-sm-block" />
                </a>
                <div className="p-2 d-none d-sm-block">
                    <nav aria-label="breadcrumb" className='breadcrumb-separator'>
                        <ol className="breadcrumb m-0">
                            <li className="breadcrumb-item">
                                <a className="link" href="/Kanbas/Courses/Home/screen.html">
                                    <span className="course-name">{courseName}</span></a></li>
                            <li className="breadcrumb-item active" aria-current="page"><span
                                className="page-name">Home</span></li>
                        </ol>
                    </nav>
                </div>
                <div className="ms-auto d-none d-sm-block">
                    <button type="button" className="btn btn-secondary">
                        <FaGlasses className="me-2" />Student View</button>
                </div>
            </div>
            <hr className="ms-3 d-none d-sm-block" />
        </div>
    )
}
export default Breadcrumb;