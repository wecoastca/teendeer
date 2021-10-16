import React, { useEffect } from 'react';
import AppLayout from '../AppLayout/AppLayout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Steps } from 'antd';
import Achievements from '../../pages/Achievements/Achievements';
import Challenges from '../../pages/Challenges/Challenges';
import Talents from '../../pages/Talents/Talents';
import Tasks from '../../pages/Tasks/Tasks';
import Users from '../../pages/Users/Users';
import Dashboard from '../../pages/Dashboard/Dashboard';
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

const App = () => {
  const talentStatus = useAppSelector(selectTalentsStatus);
  const userStatus = useAppSelector(selectUserStatus);
  const challengeStatus = useAppSelector(selectChallengeStatus);

  const loading =
    talentStatus === 'loading' ||
    userStatus === 'loading' ||
    challengeStatus === 'loading';

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getChallenges());
    dispatch(getTalents());
    dispatch(getUsers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Router>
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
          <Route path="*">
            <EmptyPage />
          </Route>
        </Switch>
      </AppLayout>
    </Router>
  );
};

export default App;
