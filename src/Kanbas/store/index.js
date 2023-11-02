import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "../Courses/Modules/modulesReducer";
import coursesReducer from "../Courses/coursesReducer";

const store = configureStore({
    reducer: {
        modulesReducer,
        coursesReducer,
    }
});


export default store;