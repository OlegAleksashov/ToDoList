import { ADD_TASK, REMOVE_TASK, EDIT_TASK } from "../actionsTypes";
import { v4 as uuidv4 } from "uuid";

export const initialState = {
  title: [],
};

export function taskReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        title: [
           ...state.title,
          {
            id: uuidv4(),
            name: action.payload,
            isCompleted: false,
            isEditing: false,
            status: "To do",
            number: state.title.length + 1,
          },
        ],
      };

    case REMOVE_TASK:
      return {
        ...state,
        title: state.title.filter((todo) => action.payload !== todo.id),
      };

    case EDIT_TASK:
      return {
        ...state,
        title: state.title.map((todo) =>
          todo.id === action.payload
            ? { ...todo, isEditing: !todo.isEditing }
            : todo
        ),
      };

    default:
      return state;
  }
}
