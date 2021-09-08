import React from 'react'
import { Route, useLocation, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'


const AdminComponent = ({component: Component, ...rest}) => {
    const location = useLocation()
    const { isAuthenticated } = useSelector( state => state.users )
    const { from } = location.state || { from: { pathname: '/login' }}

    return (
        <Route {...rest}>
            { isAuthenticated === true ? <Component /> : <Redirect to={from} /> }
        </Route>
    )
}

export default AdminComponent