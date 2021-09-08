import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route, useLocation } from 'react-router-dom'

const AuthComponent = ({component: Component, ...rest}) => {
    const location = useLocation()
    const { users } = useSelector( state => state )
    const { from } = location.state || { from: { pathname: '/admin' }}

    return ( <Route {...rest}>{ users && users.isAuthenticated === false ? <Component /> : <Redirect to={from} />}</Route> ) 
}

export default AuthComponent
