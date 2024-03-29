import {
  ADD_TASK,
  REMOVE_TASK,
  UPDATE_TASK,
  COMPLETE_TASK,
} from "./actionsTypes";

export const addTask = (title) => ({
  type: ADD_TASK,
  payload: title,
});

export const removeTask = (id) => ({
  type: REMOVE_TASK,
  payload: id,
});

export const updateTask = (id, title) => ({
  type: UPDATE_TASK,
  payload: { id, newTitle: title },
});

export const completeTask = (id, isCompleted) => ({
  type: COMPLETE_TASK,
  payload: { id, toggleProperty: isCompleted },
});
