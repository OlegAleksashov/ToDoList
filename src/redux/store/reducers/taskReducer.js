import {
  ADD_TASK,
  REMOVE_TASK,
  UPDATE_TASK,
  //COMPLETE_TASK,
} from "../actionsTypes";
import { v4 as uuidv4 } from "uuid";

export const initialState = {
  tasklist: [], //tasklist
};

export function taskReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasklist: [
          ...state.tasklist,
          {
            id: uuidv4(),
            title: action.payload,
            isCompleted: false,
            isEditing: false,
            number: state.tasklist.length + 1,
          },
        ],
      };

    case REMOVE_TASK:
      return {
        ...state,
        tasklist: state.tasklist.filter((todo) => action.payload !== todo.id),
      };

    case UPDATE_TASK:
      return {
        ...state,
        tasklist: state.tasklist.map((prevTask) =>
          prevTask.id === action.payload.id
            ? { ...prevTask, title: action.payload.newTitle }
            : prevTask
        ),
      };

    // case COMPLETE_TASK:
    //   return {
    //     ...state,
    //     tasklist: state.tasklist.filter((todo) => action.payload !== todo.id),
    //   };

    default:
      return state;
  }
}
