import { AnyAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../tools/store";
import { Step } from "@teendeer/types";
import { createStep, listSteps } from "./stepApi";
import { message } from "antd";

export interface StepState {
  list: Step[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: StepState = {
  list: [],
  status: 'idle'
}

export const addStep = createAsyncThunk('step/addStep', async (step: Partial<Step>) => {
  const response = await createStep(step);
  return response;
});

export const getSteps = createAsyncThunk('step/getSteps', async () => {
  const response = await listSteps();
  return response;
});

const isRejectedAction = (action: AnyAction) => {
  return action.type.endsWith("/rejected");
}

export const stepSlice = createSlice({
  name: 'step',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addStep.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addStep.fulfilled, (state, action) => {
        state.status = 'idle';
        state.list.push(action.payload);
        message.success('Request success');
      })
      .addCase(getSteps.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getSteps.fulfilled, (state, action) => {
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

export const selectStep = (state: RootState) => state.step.list;
export const selectStepStatus = (state: RootState) => state.step.status;

export default stepSlice.reducer;