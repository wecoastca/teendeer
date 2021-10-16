import { AnyAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../tools/store";
import { User } from "@teendeer/types";
import { createUser, listUsers } from "./userApi";
import { message } from "antd";

export interface UsersState {
  current: User | null;
  list: User[];
  status: 'idle' | 'loading' | 'failed';
  loaded: boolean;
}

const initialState: UsersState = {
  current: null,
  list: [],
  status: 'idle',
  loaded: false,
}

export const addUser = createAsyncThunk('user/addUser', async (user: Partial<User>) => {
  const response = await createUser(user);
  return response;
});

export const getUsers = createAsyncThunk('user/getUsers', async () => {
  const response = await listUsers();
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
        state.list.push(action.payload);
        message.success('Request success');
      })
      .addCase(getUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.status = 'idle';
        state.list = action.payload;
        state.loaded = true;
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
export const selectUsers = (state: RootState) => state.user.list;
export const selectIsUsersLoaded = (state: RootState) => state.user.loaded;

export default userSlice.reducer;