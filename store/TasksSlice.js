/* eslint no-param-reassign: "error" */

import { createSlice } from "@reduxjs/toolkit";
import { compareTime, storeData } from "../utilities";

const TasksSlice = createSlice({
  name: "tasksInfo",
  initialState: {
    tasks: [],
    date: [],
    filter: "all",
    category: [
      {
        title: "Work",
        name: "work",
        id: "c740b96a-da82-428f-a302-5bf9f7be24fc",
        path: require("../assets/work.png"),
      },
      {
        title: "Study",
        name: "study",
        id: "c3443eb6-c811-4c8d-8799-abf5287c7e62",
        path: require("../assets/study.png"),
      },
    ],
  },
  reducers: {
    initial(state, action) {
      const { tasks, categorys } = action.payload;
      state.tasks = tasks;
      state.category = categorys.length ? categorys : state.category;
    },
    add(state, action) {
      const task = action.payload;
      state.tasks = [...state.tasks, task].sort(compareTime);
      storeData("tasks", state.tasks);
    },
    remove(state, action) {
      const id = action.payload;
      state.tasks = state.tasks.filter((item) => item.id !== id);
      storeData("tasks", state.tasks);
    },
    setFilter(state, action) {
      const filter = action.payload;
      state.filter = filter;
    },
    changeStatus(state, action) {
      const [currentTask] = state.tasks.filter(
        (task) => task.id === action.payload
      );
      const otherTasks = state.tasks.filter(
        (task) => task.id !== action.payload
      );
      currentTask.isCompleted = !currentTask.isCompleted;
      state.tasks = [...otherTasks, currentTask];
      storeData("tasks", state.tasks);
    },
    addCategory(state, action) {
      const { name, id } = action.payload;
      state.category.push({
        title: name,
        name: name.toLowerCase(),
        id,
        path: null,
      });
      storeData("categorys", state.category);
    },
    removeCategory(state, action) {
      const id = action.payload;
      const [{ name }] = state.category.filter((item) => item.id === id);
      state.category = state.category.filter(
        (item) => item.id !== action.payload
      );
      state.tasks = state.tasks.filter((item) => item.category !== name);
      storeData("categorys", state.category);
    },
  },
});

export const selectAlltasks = (state) =>
  state.tasksInfo.tasks.filter((task) => !task.isCompleted);
export const selectCompletedTasks = (state) =>
  state.tasksInfo.tasks.filter((task) => task.isCompleted);
export const selectCategorys = (state) => state.tasksInfo.category;
export const selectFilter = (state) => state.tasksInfo.filter;

export const {
  initial,
  add,
  remove,
  setFilter,
  changeStatus,
  addCategory,
  removeCategory,
} = TasksSlice.actions;
export default TasksSlice.reducer;
