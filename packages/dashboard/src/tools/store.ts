import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import talentReducer from '../features/talent/talentSlice';
import userReducer from '../features/user/userSlice';
import challengeReducer from '../features/challenge/challengeSlice';
import achievementReducer from '../features/achievement/achievementSlice';
import taskReducer from '../features/task/taskSlice';
import stepReducer from '../features/step/stepSlice';

export const store = configureStore({
  reducer: {
    talent: talentReducer,
    user: userReducer,
    challenge: challengeReducer,
    achievement: achievementReducer,
    task: taskReducer,
    step: stepReducer,
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