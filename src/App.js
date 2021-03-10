import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
//import { auth, handleUserProfile } from './firebase/utils';
import {setCurrentUser, checkUserSession} from './redux/User/user.actions'

//components

import AdminToolbar from './components/AdminToolbar';

//hoc
import WithAuth from './components/hoc/withAuth';
import WithAdminAuth from './components/hoc/withAdminAuth';


//pages
import Homepage from './pages/Homepage';
import Search from './pages/Search';
import Registration from './pages/Registration';
import Login from './pages/Login';
import Recovery from './pages/Recovery';
import Dashboard from './pages/Dashboard';
import Admin from './pages/Admin';

//layouts
import MainLayout from './layouts/MainLayout'
import HomepageLayout from './layouts/HomepageLayout'
import AdminLayout from './layouts/AdminLayout';
import DashboardLayout from './layouts/DashboardLayout';

import './default.scss';


const App = props => {
  const dispatch = useDispatch();

    useEffect(() => {
      dispatch(checkUserSession());
    }, []);
      
      return (
        <div className="App">
            <AdminToolbar/>
            <Switch>
                <Route exact path="/"  render={() => (
                  <HomepageLayout>
                    <Homepage/>
                  </HomepageLayout>
                  )}/>
                <Route exact path="/search"  render={() => (
                  <MainLayout>
                    <Search/>
                  </MainLayout>
                  )}/>
                <Route path="/search/:filterType"  render={() => (
                  <MainLayout>
                    <Search/>
                  </MainLayout>
                  )}/>
                <Route path="/registration" render={() =>  (
                  <MainLayout>
                    <Registration/>
                  </MainLayout>
                  )}/>
                <Route path="/login"
                  render={() => (
                    <MainLayout>
                      <Login/>
                    </MainLayout>
                )}/>
                <Route path="/recovery"
                  render={() =>  (
                    <MainLayout>
                      <Recovery/>
                    </MainLayout>
                )}/>
                <Route path="/dashboard"
                  render={() =>  (
                    <WithAuth>
                      <MainLayout>
                          <Dashboard/>
                      </MainLayout>
                    </WithAuth>
                )}/>
                {/* <Route path="/order/:orderID" render={() => (
                    <WithAuth>
                      <DashboardLayout>
                        <Order />
                      </DashboardLayout>
                    </WithAuth>
                  )} /> */}
                  <Route path="/admin" render={() => (
                    <WithAdminAuth>
                      <AdminLayout>
                        <Admin />
                      </AdminLayout>
                    </WithAdminAuth>
                  )} />
              </Switch>
        </div>
    );

}

export default App;
