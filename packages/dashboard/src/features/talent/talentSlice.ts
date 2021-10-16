import { AnyAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../tools/store";
import { Talent } from "@teendeer/types";
import { createTalent, listTalents } from "./talentApi";
import { message } from "antd";

export interface TalentsState {
  list: Talent[];
  status: 'idle' | 'loading' | 'failed';
  loaded: boolean;
}

const initialState: TalentsState = {
  list: [],
  status: 'idle',
  loaded: false
}

export const addTalent = createAsyncThunk('talent/addTalent', async (talent: Partial<Talent>) => {
  const response = await createTalent(talent);
  return response;
});

export const getTalents = createAsyncThunk('talent/getTalents', async () => {
  const response = await listTalents();
  return response;
});

const isRejectedAction = (action: AnyAction) => {
  return action.type.endsWith("/rejected");
}

export const talentSlice = createSlice({
  name: 'talent',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addTalent.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addTalent.fulfilled, (state, action) => {
        state.status = 'idle';
        state.list.push(action.payload);
        message.success('Request success');
      })
      .addCase(getTalents.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getTalents.fulfilled, (state, action) => {
        state.status = 'idle';
        state.list = action.payload;
        state.loaded = true;
        message.success('Request success');
      })
      .addMatcher(isRejectedAction, (state, action) => {
        state.status = 'failed';
        message.success('Request failed');
      })
  }
});

export const selectTalents = (state: RootState) => state.talent.list;
export const selectTalentsStatus = (state: RootState) => state.talent.status;
export const selectIsTalentsLoaded = (state: RootState) => state.talent.loaded;

export default talentSlice.reducer;