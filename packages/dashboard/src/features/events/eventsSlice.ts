import { AnyAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../tools/store";
import { Product } from "@teendeer/types";
import { listEvents } from "@teendeer/api";
import { message } from "antd";

export interface EventsState {
  list: Product[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: EventsState = {
  list: [],
  status: 'idle'
}

export const getEvents = createAsyncThunk('events/getEvents', async () => {
  const response = await listEvents();
  return response;
});

const isRejectedAction = (action: AnyAction) => {
  return action.type.endsWith("/rejected");
}

export const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getEvents.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getEvents.fulfilled, (state, action) => {
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

export const selectEvents = (state: RootState) => state.events.list;
export const selectEventsStatus = (state: RootState) => state.events.status;

export default eventsSlice.reducer;