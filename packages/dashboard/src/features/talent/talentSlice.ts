import { AnyAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../tools/store";
import { Talent } from "@teendeer/types";
import { createTalent } from "./talentApi";

export interface TalentsState {
  list: Talent[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: TalentsState = {
  list: [],
  status: 'idle'
}

export const addTalent = createAsyncThunk('talent/addTalent', async (talent: Talent) => {
  const response = await createTalent(talent);
  return response.data;
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
      })
      .addMatcher(isRejectedAction, (state, action) => {
        state.status = 'failed';
      })
  }
});

export const selectTalents = (state: RootState) => state.talent.list;
export const selectTalentsStatus = (state: RootState) => state.talent.status;

export default talentSlice.reducer;