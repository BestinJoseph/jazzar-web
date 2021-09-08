import React, { Fragment } from 'react'
import { Switch } from 'react-router-dom'

import { Home, About, Services, Contacts, Projects, Proposal, SingleService } from '../components'
import PublicComponent from './PublicComponent'

import { Header, Footer } from '../components/Layouts'

const PublicRoutes = () => {
    return (
        <Fragment>
            <Header />
            <Switch>
                <PublicComponent path="/" component={Home} exact/>
                <PublicComponent path="/proposal" component={Proposal} exact/>
                <PublicComponent path="/about" component={About} exact/>
                <PublicComponent path="/services" component={Services} exact/>
                <PublicComponent path="/services/details" component={SingleService} exact/>
                <PublicComponent path="/projects" component={Projects} exact/>
                <PublicComponent path="/contacts" component={Contacts} exact/>
            </Switch>
            <Footer />
        </Fragment>
    )
}

export default PublicRoutes
