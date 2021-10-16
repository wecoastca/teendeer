import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import talentReducer from '../features/talent/talentSlice';
import userReduce from '../features/user/userSlice';
import challengeReduce from '../features/user/userSlice';

export const store = configureStore({
  reducer: {
    talent: talentReducer,
    user: userReduce,
    challenge: challengeReduce
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;