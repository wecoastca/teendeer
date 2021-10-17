import { AnyAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../tools/store";
import { Achievement } from "@teendeer/types";
import { createAchievement, listAchievement } from "@teendeer/api";
import { message } from "antd";

export interface AchievementsState {
  list: Achievement[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: AchievementsState = {
  list: [],
  status: 'idle'
}

export const addAchievement = createAsyncThunk('achievement/addAchievement', async (achievement: Partial<Achievement>) => {
  const response = await createAchievement(achievement);
  return response;
});

export const getAchievements = createAsyncThunk('achievement/getAchievements', async () => {
  const response = await listAchievement();
  return response;
});

const isRejectedAction = (action: AnyAction) => {
  return action.type.endsWith("/rejected");
}

export const achievementSlice = createSlice({
  name: 'achievement',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addAchievement.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addAchievement.fulfilled, (state, action) => {
        state.status = 'idle';
        state.list.push(action.payload);
        message.success('Request success');
      })
      .addCase(getAchievements.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getAchievements.fulfilled, (state, action) => {
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

export const selectAchievements = (state: RootState) => state.achievement.list;
export const selectAchievementsStatus = (state: RootState) => state.achievement.status;

export default achievementSlice.reducer;