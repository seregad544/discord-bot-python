import { configureStore } from '@reduxjs/toolkit';
import TasksSlice from './TasksSlice';

export default configureStore({
  reducer: {
    tasksInfo: TasksSlice,
  },
});
