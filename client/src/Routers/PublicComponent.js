import React from 'react'
import { useSelector } from 'react-redux'
import { Route } from 'react-router-dom'

const PublicComponent = ({ component: Component, ...rest}) => {
    const { isAuthenticated } = useSelector( state => state.users )

    return (
        <Route {...rest}>
            { isAuthenticated === false ? <Component /> : <Component /> }
        </Route>
    )
}

export default PublicComponent
