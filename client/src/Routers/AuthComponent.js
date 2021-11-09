import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route, useLocation } from 'react-router-dom'

const AuthComponent = ({component: Component, ...rest}) => {
    const location = useLocation()
    const { isAuthenticated, role, user } = useSelector( state => state.users )
    const { from } = location.state || { from: { pathname: `/${role}` }}

    console.log(role)
    console.log(user)

    const renderSwitch = () => {
        switch (role) {
            case 'users':
                return <Redirect to={from} />
            case 'admin':
                return <Redirect to={from} />
            case undefined:
                return <Redirect to={{from: {pathname: '/'}}} />
            default:
                return <Redirect to={from} />
        }
    }

    return ( 
        <Route {...rest}>
            { 
                isAuthenticated === false ? 
                    <Component /> 
                    : 
                    renderSwitch()
            }
        </Route> 
    ) 
}

export default AuthComponent
