import { AnyAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../tools/store";
import { Task } from "@teendeer/types";
import { createTask, listTasks } from "./taskApi";
import { message } from "antd";

export interface TaskState {
  list: Task[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: TaskState = {
  list: [],
  status: 'idle'
}

export const addTask = createAsyncThunk('task/addTask', async (task: Partial<Task>) => {
  const response = await createTask(task);
  return response;
});

export const getTasks = createAsyncThunk('task/getTasks', async () => {
  const response = await listTasks();
  return response;
});

const isRejectedAction = (action: AnyAction) => {
  return action.type.endsWith("/rejected");
}

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addTask.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.status = 'idle';
        state.list.push(action.payload);
        message.success('Request success');
      })
      .addCase(getTasks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getTasks.fulfilled, (state, action) => {
        state.status = 'idle';
        state.list = action.payload;
        message.success('Request success');
      })
      .addMatcher(isRejectedAction, (state, action) => {
        state.status = 'failed';
        message.success('Request failed');
      })
  }
});

export const selectTask = (state: RootState) => state.task.list;
export const selectTaskStatus = (state: RootState) => state.task.status;

export default taskSlice.reducer;