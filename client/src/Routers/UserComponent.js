import { Box } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router'
import UserLayoutFooter from '../components/User/Layouts/UserFooter'
import UserHeaderLayout from '../components/User/Layouts/UserHeader'


const UserComponent = ({component: Component, ...rest }) => {
    const { isAuthenticated, role } = useSelector( state => state.users )
    const { from } = { from: { pathname: '/login' }}

    return (
        <Box>
            <UserHeaderLayout />
            <Route {...rest}>
                { isAuthenticated === true && role === 'users' ? <Component /> : <Redirect to={from} /> }
            </Route>
            <UserLayoutFooter />
        </Box>
    )
}

export default UserComponent
