import { AnyAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../tools/store";
import { Challenge } from "@teendeer/types";
import { createChallenge, listChallenges } from "@teendeer/api";
import { message } from "antd";

export interface ChallengeState {
  list: Challenge[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: ChallengeState = {
  list: [],
  status: 'idle'
}

export const addChallenge = createAsyncThunk('challenge/addChallenge', async (challenge: Partial<Challenge>) => {
  const response = await createChallenge(challenge);
  return response;
});

export const getChallenges = createAsyncThunk('challenge/getChallenges', async () => {
  const response = await listChallenges();
  return response;
});

const isRejectedAction = (action: AnyAction) => {
  return action.type.endsWith("/rejected");
}

export const challengeSlice = createSlice({
  name: 'challenge',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addChallenge.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addChallenge.fulfilled, (state, action) => {
        state.status = 'idle';
        state.list.push(action.payload);
        message.success('Request success');
      })
      .addCase(getChallenges.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getChallenges.fulfilled, (state, action) => {
        state.status = 'idle';
        state.list = action.payload;
        message.success('Request success');
      })
      .addMatcher(isRejectedAction, (state, action) => {
        state.status = 'failed';
        message.success('Request failed');
      })
      .addMatcher(isRejectedAction, (state, action) => {
        state.status = 'failed';
        message.success('Request failed');
      })
  }
});

export const selectChallenge = (state: RootState) => state.challenge.list;
export const selectChallengeStatus = (state: RootState) => state.challenge.status;

export default challengeSlice.reducer;