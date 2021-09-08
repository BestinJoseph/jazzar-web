import React from 'react'
import { Switch } from 'react-router-dom'

import { Login, Register } from '../components'
import AuthComponent from './AuthComponent'

const AuthRoutes = () => {

    return (
        <Switch>
            <AuthComponent path="/login" component={Login}/>
            <AuthComponent path="/register" component={Register}/>
        </Switch>
    )
}

export default AuthRoutes
