import React, { useEffect } from 'react';
import AppLayout from '../AppLayout/AppLayout';
import { Switch, Route } from 'react-router-dom';
import Achievements from '../../pages/Achievements/Achievements';
import Challenges from '../../pages/Challenges/Challenges';
import Talents from '../../pages/Talents/Talents';
import Tasks from '../../pages/Tasks/Tasks';
import Users from '../../pages/Users/Users';
import Dashboard from '../../pages/Dashboard/Dashboard';
import Steps from '../../pages/Steps/Steps';
import EmptyPage from '../../pages/EmptyPage/EmptyPage';
import { useAppDispatch, useAppSelector } from '../../tools/hooks';
import {
  getChallenges,
  selectChallengeStatus,
} from '../../features/challenge/challengeSlice';
import {
  getTalents,
  selectTalentsStatus,
} from '../../features/talent/talentSlice';
import { getUsers, selectUserStatus } from '../../features/user/userSlice';
import {
  getAchievements,
  selectAchievementsStatus,
} from '../../features/achievement/achievementSlice';
import { getTasks, selectTaskStatus } from '../../features/task/taskSlice';
import { getSteps, selectStepStatus } from '../../features/step/stepSlice';
import Events from '../../pages/Events/Events';
import {
  getEvents,
  selectEventsStatus,
} from '../../features/events/eventsSlice';

const App = () => {
  const talentStatus = useAppSelector(selectTalentsStatus);
  const userStatus = useAppSelector(selectUserStatus);
  const challengeStatus = useAppSelector(selectChallengeStatus);
  const acievementsStatus = useAppSelector(selectAchievementsStatus);
  const taskStatus = useAppSelector(selectTaskStatus);
  const stepStatus = useAppSelector(selectStepStatus);
  const eventsStatus = useAppSelector(selectEventsStatus);

  const loading =
    talentStatus === 'loading' ||
    userStatus === 'loading' ||
    challengeStatus === 'loading' ||
    acievementsStatus === 'loading' ||
    taskStatus === 'loading' ||
    stepStatus === 'loading' ||
    eventsStatus === 'loading';

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getChallenges());
    dispatch(getTalents());
    dispatch(getUsers());
    dispatch(getAchievements());
    dispatch(getTasks());
    dispatch(getSteps());
    dispatch(getEvents());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AppLayout spinning={loading}>
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/talents">
          <Talents />
        </Route>
        <Route path="/achievements">
          <Achievements />
        </Route>
        <Route path="/challenges">
          <Challenges />
        </Route>
        <Route path="/tasks">
          <Tasks />
        </Route>
        <Route path="/steps">
          <Steps />
        </Route>
        <Route path="/events">
          <Events />
        </Route>
        <Route path="*">
          <EmptyPage />
        </Route>
      </Switch>
    </AppLayout>
  );
};

export default App;
