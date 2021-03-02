import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
//import { auth, handleUserProfile } from './firebase/utils';
import {setCurrentUser, checkUserSession} from './redux/User/user.actions'

//hoc
import WithAuth from './components/hoc/withAuth';

//pages
import Homepage from './pages/Homepage';
import Registration from './pages/Registration';
import Login from './pages/Login';
import Recovery from './pages/Recovery';
import Dashboard from './pages/Dashboard';

//layouts
import MainLayout from './layouts/MainLayout'
import HomepageLayout from './layouts/HomepageLayout'

import './default.scss';


const App = props => {
  const dispatch = useDispatch();

    useEffect(() => {
      dispatch(checkUserSession());
    }, []);

  // useEffect(() => {
    
  //   const authLisener = auth.onAuthStateChanged(async userAuth => {
  //     if (userAuth) {
  //       const userRef = await handleUserProfile(userAuth);
  //       userRef.onSnapshot(snapshot => {
  //         dispatch(setCurrentUser({
  //             id: snapshot.id,
  //             ...snapshot.data()
  //         }));
  //       });
  //     }
  //     dispatch(setCurrentUser(userAuth));
  //   });
  //   return () => {
  //       authLisener();
  //   }
  // }, []);
      
      return (
        <div className="App">
            <Switch>
                <Route exact path="/"  
                  render={() => (
                  <HomepageLayout>
                    <Homepage/>
                  </HomepageLayout>
                  )}/>
                <Route path="/registration" 
                 render={() =>  (
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
              </Switch>
        </div>
    );

}

export default App;
