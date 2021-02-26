import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Registration from './pages/Registration';
import MainLayout from './layouts/MainLayout'
import HomepageLayout from './layouts/HomepageLayout'

import './default.scss';

function App() {
  return (
    <div className="App">
        <Switch>
            <Route exact path="/"  render={() => (
              <HomepageLayout>
                <Homepage/>
              </HomepageLayout>
              )}/>
            <Route path="/registration" render={() => (
              <MainLayout>
                <Registration/>
              </MainLayout>
              )}/>
          </Switch>
    </div>
  );
}

export default App;
