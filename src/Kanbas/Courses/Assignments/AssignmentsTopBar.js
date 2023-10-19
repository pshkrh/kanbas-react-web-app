const AssignmentsTopBar = () => {
    return (
        <div>
            <div class="d-flex gap-1">
                <div class="me-auto w-25">
                    <input type="text" class="form-control" placeholder="Search for Assignment" />
                </div>
                <button type="button" class="btn btn-secondary"><i class="fa-solid fa-plus"></i>
                    Group</button>
                <button type="button" class="btn btn-danger"><i class="fa-solid fa-plus"></i>
                    Assignment</button>
                <div class="dropdown">
                    <button class="btn btn-secondary" type="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        <i class="fa-solid fa-ellipsis-vertical"></i>
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Option 1</a></li>
                        <li><a class="dropdown-item" href="#">Option 2</a></li>
                        <li><a class="dropdown-item" href="#">Option 3</a></li>
                    </ul>
                </div>
            </div>

            <hr />
        </div>
    )
}
export default AssignmentsTopBar;