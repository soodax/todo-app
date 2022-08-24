import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TodoItem {
  taskID: number
  taskText: string
  taskDate: any
  check: boolean
}

interface MainState {
  currentNewTask: string
  tasks: TodoItem[]
  counterID: number
}

const initialState: MainState = {
  currentNewTask: "",
  tasks: [],
  counterID: 0,
}

const mainSlice = createSlice({
  name: "main",
  initialState: initialState,
  reducers: {
    SET_TASK(state, action: PayloadAction<{currentTask: string}>) {
      state.currentNewTask = action.payload.currentTask;
    },
    ADD_TASK(state, action: PayloadAction<{taskDate: any}>) {
      state.counterID = state.counterID + 1;
      state.tasks.push({
        taskID: state.counterID,
        taskText: state.currentNewTask,
        taskDate: action.payload.taskDate,
        check: false,
      });
      state.currentNewTask = "";
    },
    DELETE_TASK(state, action: PayloadAction<{id: number}>) {
      state.tasks = state.tasks.filter(
        (task) => task.taskID !== action.payload.id
      );
    },
    CHECK_TASK(state, action: PayloadAction<{id: number}>) {
      state.tasks = state.tasks.map((task) => {
        if (task.taskID === action.payload.id) {
          if (task.check === false) {
            return {
              ...task,
              check: true,
            };
          } else {
            return {
              ...task,
              check: false,
            };
          }
        }
        return task;
      });
    },
  },
});

export const { SET_TASK, ADD_TASK, DELETE_TASK, CHECK_TASK } = mainSlice.actions;

export default mainSlice.reducer;