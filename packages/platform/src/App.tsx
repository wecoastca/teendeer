import React from 'react';
import './App.less';
import { Layout } from 'components/Layout';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Achievements, Afisha, Challenges, Profile, Store } from 'modules';

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
          <Route path="/challenges">
            <Challenges />
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
