import React, { useLayoutEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux';

// import './App.scss';
import { getProjects } from './actions/projects'
import { getServices, reinitializeServices } from './actions/services'
import { getLocationsAction } from './actions/locationActions';
import { getContacts } from './actions/contactActions';
import { getDailesAction } from './actions/dailyActions';
import AuthRoutes from './Routers/AuthRoutes';
import PublicRoutes from './Routers/PublicRoutes';
import AdminRoutes from './Routers/AdminRoutes';

const App = () => {
  const dispatch = useDispatch()
  const location = useLocation()

  useLayoutEffect(() => {
    window.scrollTo(0,0)
    dispatch(reinitializeServices())
    dispatch(getProjects())
    dispatch(getServices())
    dispatch(getLocationsAction())
    dispatch(getContacts())
    dispatch(getDailesAction())
  }, [dispatch, location.pathname])

  return (
    <Switch>
      <Route path={['/login', '/register']}>
        <AuthRoutes />
      </Route>
      <Route path={['/admin']}>
        <AdminRoutes />
      </Route>
      <Route path={['/', '/about']}>
        <PublicRoutes />
      </Route>
    </Switch>
  );
}

export default App;
