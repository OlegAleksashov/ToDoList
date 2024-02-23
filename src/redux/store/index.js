// import { configureStore } from "@reduxjs/toolkit";
// import { counterReducer } from "./reducers/taskReducer";

// export default configureStore({ reducer: counterReducer });

import { combineReducers } from "redux";
import { taskReducer } from "./reducers/taskReducer";
import { changeReducer } from "./reducers/changeReducer";

const rootReducer = combineReducers({
  title: taskReducer,
  change: changeReducer,
});

export default rootReducer;
