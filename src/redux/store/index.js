import { configureStore } from "@reduxjs/toolkit";
import { taskReducer } from "./reducers/taskReducer";

export default configureStore({ reducer: taskReducer });

// import { combineReducers } from "redux";
// import { taskReducer } from "./reducers/taskReducer";
// import {

// const rootReducer = combineReducers({
//   title: taskReducer,
// });

// export default rootReducer;
