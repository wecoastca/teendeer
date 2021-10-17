import React from 'react';
import './App.less';
import { Layout } from 'components/Layout';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Achievements, Afisha, Challenges, CurrentChallenge, Profile, Store } from 'modules';
import { CurrentTask } from 'modules/Challenges/CurrentTask';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Redirect to="/profile" />
          </Route>
          <Route path="/afisha">
            <Afisha />
          </Route>
          <Route path="/achieve">
            <Achievements />
          </Route>
          <Route exact path="/challenges">
            <Challenges />
          </Route>
          <Route path="/challenges/:id">
            <CurrentChallenge />
          </Route>
          <Route path="/tasks/:id">
            <CurrentTask />
          </Route>
          <Route path="/store">
            <Store />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
      </Layout >
    </Router>
  );
}

export default App;
