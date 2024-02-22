import { ADD_TASK, EDIT_TASK, REMOVE_TASK, UPDATE_TASK } from "./actionsTypes";

export const addTask = (title) => ({
  type: ADD_TASK,
  payload: title,
});

export const editTask = (id) => ({
  type: EDIT_TASK,
  payload: id,
});

export const removeTask = (id) => ({
  type: REMOVE_TASK,
  payload: id,
});

export const updateTask = (title) => ({
  type: UPDATE_TASK,
  payload: title,
});
