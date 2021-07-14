import React, { useLayoutEffect, Fragment } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux';

// import './App.scss';
import { Header, Footer } from './components/Layouts'
import { Home, About, Services, Contacts, Projects, Proposal, SingleService } from './components'
import { getProjects } from './actions/projects'
import { getServices } from './actions/services'

const App = (props) => {
  const location = useLocation()
  const dispatch = useDispatch()

  useLayoutEffect(() => {
    window.scrollTo(0,0)
    dispatch(getProjects())
    dispatch(getServices())
  }, [location.pathname, dispatch])

  return (
    <Fragment>
        <Header />
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/proposal" component={Proposal} exact/>
          <Route path="/about" component={About} exact/>
          <Route path="/services" component={Services} exact/>
          <Route path="/services/:slug" component={SingleService} exact/>
          <Route path="/projects" component={Projects} exact/>
          <Route path="/contacts" component={Contacts} exact/>
        </Switch>
        <Footer />
    </Fragment>
  );
}

export default App;
