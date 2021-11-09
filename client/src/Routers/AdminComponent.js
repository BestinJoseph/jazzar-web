import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'


const AdminComponent = ({component: Component, ...rest}) => {
    const { isAuthenticated, role } = useSelector( state => state.users )
    const { from } = { from: { pathname: '/login' }}

    return (
        <Route {...rest}>
            { isAuthenticated === true && role === 'admin' ? <Component /> : <Redirect to={from} /> }
        </Route>
    )
}

export default AdminComponent