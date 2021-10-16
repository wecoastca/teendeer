import { AnyAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../tools/store";
import { User } from "@teendeer/types";
import { createUser } from "./userApi";
import { message } from "antd";

export interface UsersState {
  current: User | null;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: UsersState = {
  current: null,
  status: 'idle'
}

export const addUser = createAsyncThunk('user/addUser', async (user: Partial<User>) => {
  const response = await createUser(user);
  return response;
});

const isRejectedAction = (action: AnyAction) => {
  return action.type.endsWith("/rejected");
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.status = 'idle';
        state.current = action.payload;
        message.success('Request success');
      })
      .addMatcher(isRejectedAction, (state, action) => {
        state.status = 'failed';
        message.error('Request failed');
      })
  }
});

export const selectUser = (state: RootState) => state.user.current;
export const selectUserStatus = (state: RootState) => state.user.status;

export default userSlice.reducer;