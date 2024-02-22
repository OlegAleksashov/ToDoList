import { UPDATE_TASK } from "../actionsTypes";

export const initialState = {
  title: [],
};
export function changeReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((prevTask) =>
          prevTask.id === action.payload.id
            ? { ...prevTask, name: action.payload.newName }
            : prevTask
        ),
      };
    default:
      return state;
  }
}
// onChange={(e) => {
//     const newName = e.target.value;
//     tasklist((prevTaskList) =>
//       prevTaskList.map((prevTask) =>
//         prevTask.id === task.id
//           ? { ...prevTask, name: newName }
//           : prevTask
//       )
//     );
//   }
