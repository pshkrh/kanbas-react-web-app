const AssignmentEditorTopBar = () => {
    return (
        <div>
            <div class="d-flex gap-3 align-items-center justify-content-end">
                <div>
                    <i class="fa-solid fa-circle-check check-icon"></i> <span
                        class="check-icon"><b>Published</b></span>
                </div>
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
export default AssignmentEditorTopBar;